/**
 * ロケールの週の始まり（0 = 日曜、1 = 月曜）。T388。
 *
 * `Intl.Locale` の週の情報（`getWeekInfo()`。古い Chrome / Safari は `weekInfo` のプロパティ）から決める。
 * 主要ブラウザの最新版はどれも持っているので、対応表は持たない（ユーザー判断 2026-11-15）。
 * 持たないブラウザ（Firefox 152 以前など）と、読めないロケールは日曜。
 *
 * 部品が受けるのは日曜と月曜だけなので、土曜始まりのロケール（ar-EG・fa など）も日曜に寄せる。
 * `firstDay` は 1 = 月曜 … 7 = 日曜（ISO の並び）。
 */
type WeekInfo = { firstDay: number };
type LocaleWithWeekInfo = Intl.Locale & {
  getWeekInfo?: () => WeekInfo;
  weekInfo?: WeekInfo;
};

export const getLocaleWeekStart = (locale: string): 0 | 1 => {
  try {
    const intlLocale = new Intl.Locale(locale) as LocaleWithWeekInfo;
    const info =
      typeof intlLocale.getWeekInfo === "function" ? intlLocale.getWeekInfo() : intlLocale.weekInfo;
    return info?.firstDay === 1 ? 1 : 0;
  } catch {
    return 0;
  }
};

/**
 * `Intl` に渡せるロケールにする。読めない値（"xx_YY" など）は `fallback`。
 * 共有のロケールのストアで検証すると全部品の重さになるので、暦を使う部品の側で通す（T388）。
 */
export const toIntlLocale = (locale: string, fallback: string): string => {
  try {
    return Intl.getCanonicalLocales(locale)[0] ?? fallback;
  } catch {
    return fallback;
  }
};
