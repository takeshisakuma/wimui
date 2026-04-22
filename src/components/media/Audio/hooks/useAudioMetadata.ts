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
      import("jsmediatags")
        .then((jsmediatagsModule) => {
          const jmt = jsmediatagsModule.default || jsmediatagsModule;
          jmt.read(currentTrack.src, {
            onSuccess: (tag: unknown) => {
              type MediaTags = {
                title?: string;
                artist?: string;
                picture?: { data: number[]; format: string };
              };
              const t = (tag as { tags: MediaTags }).tags;
              setFetchedMeta((prev) => {
                const newMeta = { ...prev };
                if (t.title) newMeta.title = t.title;
                if (t.artist) newMeta.artist = t.artist;

                if (t.picture) {
                  const { data, format } = t.picture;
                  let base64String = "";
                  data.forEach((char: number) => {
                    base64String += String.fromCharCode(char);
                  });
                  const base64 = btoa(base64String);
                  newMeta.cover = `data:${format};base64,${base64}`;
                }
                return newMeta;
              });
            },
            onError: (err: unknown) => {
              if (isDev) console.warn("jsmediatags parse error:", err);
            },
          });
        })
        .catch((err) => {
          if (isDev) console.warn("Failed to load jsmediatags dynamically:", err);
        });
    }
  }, [currentTrack, showMetadata]);

  const metaTitle = currentTrack?.title || fetchedMeta.title || "";
  const metaArtist = currentTrack?.artist || fetchedMeta.artist || "";
  const metaCover = currentTrack?.coverArt || fetchedMeta.cover || "";

  return { metaTitle, metaArtist, metaCover };
}
