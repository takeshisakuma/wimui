import { useState, useEffect } from "react";
import type { AudioTrack } from "../Audio";

interface UseAudioMetadataOptions {
  currentTrack: AudioTrack | null;
  showMetadata: boolean;
}

export function useAudioMetadata({
  currentTrack,
  showMetadata,
}: UseAudioMetadataOptions) {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaArtist, setMetaArtist] = useState("");
  const [metaCover, setMetaCover] = useState("");

  useEffect(() => {
    if (!currentTrack) return;

    const title = currentTrack.title || "";
    const artist = currentTrack.artist || "";
    const cover = currentTrack.coverArt || "";

    if (showMetadata && !title && !artist && !cover) {
      import("jsmediatags/build2/jsmediatags.js")
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
              if (t.title) setMetaTitle(t.title);
              if (t.artist) setMetaArtist(t.artist);

              if (t.picture) {
                const { data, format } = t.picture;
                let base64String = "";
                data.forEach((char: number) => {
                  base64String += String.fromCharCode(char);
                });
                const base64 = btoa(base64String);
                setMetaCover(`data:${format};base64,${base64}`);
              }
            },
            onError: (err: unknown) => {
              console.warn("jsmediatags parse error:", err);
            },
          });
        })
        .catch((err) => {
          console.warn("Failed to load jsmediatags dynamically:", err);
        });
    }

    setMetaTitle(title);
    setMetaArtist(artist);
    setMetaCover(cover);
  }, [currentTrack, showMetadata]);

  return { metaTitle, metaArtist, metaCover };
}
