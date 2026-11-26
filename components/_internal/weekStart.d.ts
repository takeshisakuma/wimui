export declare const getLocaleWeekStart: (locale: string) => 0 | 1;
/**
 * `Intl` に渡せるロケールにする。読めない値（"xx_YY" など）は `fallback`。
 * 共有のロケールのストアで検証すると全部品の重さになるので、暦を使う部品の側で通す（T388）。
 */
export declare const toIntlLocale: (locale: string, fallback: string) => string;
