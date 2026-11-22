import React from "react";
import { Portal } from "../overlay/Portal/Portal";
import { Transition } from "../layout/Transition/Transition";
import styles from "./inline-portal.module.scss";

export interface InlinePortalProps {
  /** 面が開いているか。 */
  open: boolean;
  /** 影の箱に渡す ref。useInlineFloating の setAnchor と、外側の押下の判定に使う ref を束ねて渡す。 */
  anchorRef: React.Ref<HTMLDivElement>;
  /** 開閉のアニメーション。渡すと閉じるアニメーションが終わってから DOM から消す。 */
  transition?: "fade";
  /**
   * 影の箱を、開閉に関係なく置いたままにする。面が自分で開閉のアニメーションを持つ部品が使う
   * （ModelSelector の scale は、拡大の中心が面の上端。影の箱に付けると中心が引き金の箱になり、
   * 開く途中の見た目が変わる）。閉じている間、body には中身の無い透明な箱が残る（押下は受けない）。
   */
  persistent?: boolean;
  /** 面（引き金の隣に描いていたときの要素を、そのまま渡す）。 */
  children: React.ReactNode;
}

/**
 * 引き金の隣に開く面を、body に描く（T432）。
 *
 * 以前は面を引き金の隣に描いていて、外側に `overflow` で中身を切る箱（スクロールする Dialog の本文・
 * カード）があると面が切れた。「その場に置いたまま `position: fixed`」は、祖先が `container-type` /
 * `transform` / `backdrop-filter` を持つと fixed の基準がその祖先になり、やはり切れる。
 *
 * body には引き金と同じ位置と大きさの影の箱を置き、面はその中に、いまの CSS（間隔のトークン・上下の
 * 向き・横のずれ）のまま描く。影の箱の位置合わせは `useInlineFloating` の `setAnchor` が受け持つ。
 * 使う部品は、外側の押下の判定で影の箱も内側に数えること。
 */
export const InlinePortal = ({ open, anchorRef, transition, persistent, children }: InlinePortalProps) => (
  <Portal>
    {persistent ? (
      <div className={styles.anchor} ref={anchorRef}>
        {children}
      </div>
    ) : transition ? (
      <Transition show={open} preset={transition} className={styles.anchor} ref={anchorRef}>
        {children}
      </Transition>
    ) : open ? (
      <div className={styles.anchor} ref={anchorRef}>
        {children}
      </div>
    ) : null}
  </Portal>
);
