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
      import("music-metadata")
        .then(async (mm) => {
          const response = await fetch(currentTrack.src);
          if (!response.ok || !response.body) {
            throw new Error(`Failed to fetch audio file: ${response.status}`);
          }
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
        })
        .catch((err) => {
          if (isDev) console.warn("Failed to read audio metadata:", err);
        });
    }
  }, [currentTrack, showMetadata]);

  const metaTitle = currentTrack?.title || fetchedMeta.title || "";
  const metaArtist = currentTrack?.artist || fetchedMeta.artist || "";
  const metaCover = currentTrack?.coverArt || fetchedMeta.cover || "";

  return { metaTitle, metaArtist, metaCover };
}
