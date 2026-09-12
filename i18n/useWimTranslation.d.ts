import { setWimLocale, WimTranslateOptions } from './instance';
import { WimI18nKey } from './generated/keys';
type Namespace = string | readonly string[];
export interface WimTFunction {
    (key: WimI18nKey, options?: WimTranslateOptions): string;
}
export declare function useWimTranslation(ns?: Namespace): {
    t: WimTFunction;
    i18n: {
        language: string;
        changeLanguage: typeof setWimLocale;
    };
};
export {};
