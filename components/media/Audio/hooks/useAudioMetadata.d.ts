import { AudioTrack } from '../Audio';
interface UseAudioMetadataOptions {
    currentTrack: AudioTrack | null;
    showMetadata: boolean;
}
export declare function useAudioMetadata({ currentTrack, showMetadata, }: UseAudioMetadataOptions): {
    metaTitle: string;
    metaArtist: string;
    metaCover: string;
};
export {};
