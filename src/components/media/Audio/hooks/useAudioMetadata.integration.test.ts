import { Buffer } from "node:buffer";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect, vi, beforeAll, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useAudioMetadata } from "./useAudioMetadata";

/**
 * 本物の `music-metadata` でタグを読むテスト。
 *
 * `useAudioMetadata.test.ts` は `music-metadata` をモックしていて、ストーリーの見本（`audiosample.mp3`）には
 * タグが無い。そのため、`music-metadata` の major を上げても、どのテストも「本当に読めるか」を見ていなかった
 * （2026-10-07・11 → 12。CI は全部緑だったが、読めることは手で確かめるしかなかった）。
 *
 * ここでは見本の mp3 の頭に ID3v2.3 のタグを付け、モックなしでフックに読ませる。
 * Node で流すので、通るのは `music-metadata` の Node 用の入口。ブラウザ用の入口は別のファイルで、ここでは通らない。
 *
 * 待ち方の約束（2026-10-08・CI-15。全量の実行で 1 回落ちた）:
 * - フックは `import("music-metadata")` が済んでから `fetch` を呼ぶ。最初の読み込みが `waitFor` の既定の 1 秒より
 *   遅れると、テストが落ちたあとで読み込みが終わり、差し替えを外した本物の `fetch` が呼ばれる。
 *   そのため `beforeAll` で先に読み込んでおく。
 * - トラックは `renderHook` の外で作る。中で作ると描画のたびに別のオブジェクトになり、フックが読み直しを繰り返す
 *   （`Audio` は `useMemo` したプレイリストから渡すので、実物では起きない）。
 */

const sampleMp3 = fs.readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "../../../../media/audiosample.mp3"),
);

// 1x1 の PNG を 2 種類。中身が違うので、どちらが選ばれたかを data URL で見分けられる
const OTHER_PNG =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
const FRONT_COVER_PNG =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

// ID3v2 の画像の種類（APIC の picture type）
const PICTURE_TYPE_OTHER = 0;
const PICTURE_TYPE_FRONT_COVER = 3;

const frame = (id: string, body: Buffer) => {
  const header = Buffer.alloc(10);
  header.write(id, 0, "latin1");
  header.writeUInt32BE(body.length, 4);
  return Buffer.concat([header, body]);
};

const textFrame = (id: string, value: string) =>
  frame(id, Buffer.concat([Buffer.from([0]), Buffer.from(value, "latin1")]));

const pictureFrame = (type: number, base64: string) =>
  frame(
    "APIC",
    Buffer.concat([
      Buffer.from([0]),
      Buffer.from("image/png\0", "latin1"),
      Buffer.from([type]),
      Buffer.from([0]),
      Buffer.from(base64, "base64"),
    ]),
  );

/** ID3v2.3 のタグを頭に付けた mp3 を作る。 */
const withId3 = (frames: Buffer[]) => {
  const body = Buffer.concat(frames);
  const size = Buffer.from([
    (body.length >> 21) & 0x7f,
    (body.length >> 14) & 0x7f,
    (body.length >> 7) & 0x7f,
    body.length & 0x7f,
  ]);
  return Buffer.concat([Buffer.from("ID3", "latin1"), Buffer.from([3, 0, 0]), size, body, sampleMp3]);
};

const serve = (bytes: Buffer) => {
  vi.stubGlobal(
    "fetch",
    vi.fn(
      async () => new Response(new Uint8Array(bytes), { headers: { "content-type": "audio/mpeg" } }),
    ),
  );
};

/** 読み込みを先に済ませていても、全量の実行では遅れることがあるので、既定の 1 秒より長く待つ。 */
const WAIT = { timeout: 10_000 };

describe("useAudioMetadata（本物の music-metadata）", () => {
  let warn: ReturnType<typeof vi.spyOn>;

  beforeAll(async () => {
    await import("music-metadata");
  }, 60_000);

  beforeEach(() => {
    warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    warn.mockRestore();
  });

  it("タグの題名・アーティスト・表のジャケットを読む", async () => {
    serve(
      withId3([
        textFrame("TIT2", "Sample Title"),
        textFrame("TPE1", "Sample Artist"),
        // 表のジャケットを 2 枚目に置く。先頭を取るだけの実装では通らない
        pictureFrame(PICTURE_TYPE_OTHER, OTHER_PNG),
        pictureFrame(PICTURE_TYPE_FRONT_COVER, FRONT_COVER_PNG),
      ]),
    );

    const track = { src: "tagged.mp3" };
    const { result } = renderHook(() => useAudioMetadata({ currentTrack: track, showMetadata: true }));

    await waitFor(() => expect(result.current.metaTitle).toBe("Sample Title"), WAIT);
    expect(result.current.metaArtist).toBe("Sample Artist");
    expect(result.current.metaCover).toBe(`data:image/png;base64,${FRONT_COVER_PNG}`);
    expect(warn).not.toHaveBeenCalled();
  });

  it("画像の無いタグでは、ジャケットを空のままにする", async () => {
    serve(withId3([textFrame("TIT2", "No Cover Title"), textFrame("TPE1", "No Cover Artist")]));

    const track = { src: "no-cover.mp3" };
    const { result } = renderHook(() => useAudioMetadata({ currentTrack: track, showMetadata: true }));

    await waitFor(() => expect(result.current.metaTitle).toBe("No Cover Title"), WAIT);
    expect(result.current.metaArtist).toBe("No Cover Artist");
    expect(result.current.metaCover).toBe("");
    expect(warn).not.toHaveBeenCalled();
  });

  it("タグの無いファイルでは、何も出さず、警告もしない", async () => {
    const fetchMock = vi.fn(
      async () =>
        new Response(new Uint8Array(sampleMp3), { headers: { "content-type": "audio/mpeg" } }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const track = { src: "untagged.mp3" };
    const { result } = renderHook(() => useAudioMetadata({ currentTrack: track, showMetadata: true }));

    // 読み終わると、フックは自分で接続を中断する。その合図まで待ってから、空のままであることを見る
    const signal = await vi.waitFor(() => {
      const init = (fetchMock.mock.calls[0] as unknown as [string, RequestInit] | undefined)?.[1];
      expect(init?.signal?.aborted).toBe(true);
      return init?.signal;
    }, WAIT);
    expect(signal?.aborted).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(result.current.metaTitle).toBe("");
    expect(result.current.metaArtist).toBe("");
    expect(result.current.metaCover).toBe("");
    expect(warn).not.toHaveBeenCalled();
  });
});
