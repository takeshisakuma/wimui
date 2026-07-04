import { useState, useEffect } from "react";
import type { AudioTrack } from "../Audio";
import { isDev } from "@/utilities/dev-utils";

interface UseAudioMetadataOptions {
  currentTrack: AudioTrack | null;
  showMetadata: boolean;
}

export function useAudioMetadata({
  currentTrack,
  showMetadata,
}: UseAudioMetadataOptions) {
  const [fetchedMeta, setFetchedMeta] = useState({ title: "", artist: "", cover: "" });
  const [prevTrackSrc, setPrevTrackSrc] = useState<string | undefined>(undefined);

  // Reset fetched metadata when track changes
  if (currentTrack?.src !== prevTrackSrc) {
    setPrevTrackSrc(currentTrack?.src);
    setFetchedMeta({ title: "", artist: "", cover: "" });
  }

  useEffect(() => {
    if (!currentTrack) return;

    if (showMetadata && !currentTrack.title && !currentTrack.artist && !currentTrack.coverArt) {
      const controller = new AbortController();
      import("music-metadata")
        .then(async (mm) => {
          const response = await fetch(currentTrack.src, { signal: controller.signal });
          if (!response.ok || !response.body) {
            throw new Error(`Failed to fetch audio file: ${response.status}`);
          }
          try {
            const { common } = await mm.parseWebStream(response.body, {
              mimeType: response.headers.get("content-type") ?? undefined,
            });
            const cover = mm.selectCover(common.picture);
            setFetchedMeta((prev) => {
              const newMeta = { ...prev };
              if (common.title) newMeta.title = common.title;
              if (common.artist) newMeta.artist = common.artist;

              if (cover) {
                let base64String = "";
                cover.data.forEach((byte) => {
                  base64String += String.fromCharCode(byte);
                });
                newMeta.cover = `data:${cover.format};base64,${btoa(base64String)}`;
              }
              return newMeta;
            });
          } finally {
            // parseWebStream はメタデータ読了後もレスポンスストリームを消費・クローズ
            // しないため、接続が開いたままになる。明示的に中断しないと
            // 残りのファイル全体のダウンロード継続や、ネットワークアイドルを待つ
            // 処理（SSR ハイドレーション計測・VRT 等）のハングを招く
            controller.abort();
          }
        })
        .catch((err) => {
          // AbortError はアンマウント・完了後の意図的な中断なので警告しない
          if (isDev && (err as Error)?.name !== "AbortError") {
            console.warn("Failed to read audio metadata:", err);
          }
        });
      // アンマウント時（トラック切替時）も接続を破棄する
      return () => controller.abort();
    }
  }, [currentTrack, showMetadata]);

  const metaTitle = currentTrack?.title || fetchedMeta.title || "";
  const metaArtist = currentTrack?.artist || fetchedMeta.artist || "";
  const metaCover = currentTrack?.coverArt || fetchedMeta.cover || "";

  return { metaTitle, metaArtist, metaCover };
}
