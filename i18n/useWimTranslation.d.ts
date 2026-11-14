import { setWimLocale, WimNamespace, WimTranslateOptions } from './instance';
/** 名前空間が受けるキー（bare と "ns:key" の両方）。 */
export type WimKeyOf<N> = N extends WimNamespace<infer Name, infer Key> ? Key | `${Name}:${Key}` : never;
export interface WimTFunction<Key extends string = string> {
    (key: Key, options?: WimTranslateOptions): string;
}
export declare function useWimTranslation<N extends WimNamespace = never>(ns?: N | readonly N[]): {
    t: WimTFunction<WimKeyOf<N>>;
    i18n: {
        language: string;
        changeLanguage: typeof setWimLocale;
    };
};
