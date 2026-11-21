/** リンクの href に置いてよいか（http / https / mailto / 相対）。 */
export declare const isSafeLinkUrl: (raw: string | null | undefined) => boolean;
/** 画像の src に置いてよいか（http / https / 相対）。 */
export declare const isSafeImageUrl: (raw: string | null | undefined) => boolean;
