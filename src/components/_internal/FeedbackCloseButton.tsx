import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { Icon } from "../media/Icon/Icon";
import { ComponentSize } from "../../types/tokens";
import { CloseIcon } from "@/icon";
import { moveFocusOutside } from "./focusHandoff";

/**
 * Props for the FeedbackCloseButton component.
 */
export interface FeedbackCloseButtonProps {
  /**
   * Callback fired when the close button is clicked.
   * If not provided, the button will not be rendered (returns null).
   */
  onClose?: (id?: string) => void;
  /**
   * Optional identifier for the target being closed (e.g., Toast ID).
   */
  id?: string;
  /**
   * Additional CSS class name.
   */
  className?: string;
  /**
   * ARIA label for accessibility. Defaults to translated "Close" label.
   */
  ariaLabel?: string;
  /**
   * Size of the close icon.
   * @default "sm"
   */
  size?: ComponentSize;
}

/**
 * FeedbackCloseButton is an internal component providing a standardized close button 
 * for feedback components like Toast, Notification, and Alert.
 * 
 * Composition Contract:
 * - Automatically handles click propagation stoppage.
 * - Integrates with i18next for localized accessibility labels.
 * - Returns null if onClose is not provided.
 * - Keeps focus in the page when the button is removed while it has focus (see `useFocusHandoff`).
 */
export const FeedbackCloseButton = (props: FeedbackCloseButtonProps) => {
  // ボタンを描かないときは、中身ごと置かない（フォーカスの受け渡しは、ボタンが消えるときに働く）
  if (!props.onClose) return null;
  return <CloseButton {...props} onClose={props.onClose} />;
};

/** この閉じるボタンを持つ部品の根。消えるのはこの単位なので、行き先はこの外から選ぶ。 */
const ROOTS = ".wim-alert, .wim-notification, .wim-toast, .wim-snackbar, .wim-banner";

/**
 * 閉じるボタンは、押すと自分を含む部品ごと消える。フォーカスを置いたまま消えると、フォーカスは
 * 文書（body）へ落ち、次の Tab はページの先頭から始まる（T392）。消える直前に、部品の外の、
 * 文書の順で 1 つ前の停止点へ渡す（前に無ければ、最初の停止点）。
 *
 * 消えるときに見るので、閉じ方を問わない（すぐ消える・閉じる動きのあとに消える・使う側が外す）。
 * 使う側が `onClose` の中で自分でフォーカスを移していれば、ボタンにフォーカスは無いので、何もしない。
 * 画面は動かさない（`preventScroll`）── 画面に固定して重ねる部品（Toast など）は、文書の順で
 * 前の要素がページの末尾にあり、そこへスクロールすると、閉じただけでページが飛ぶ。
 */
const useFocusHandoff = (ref: React.RefObject<HTMLButtonElement | null>) => {
  React.useLayoutEffect(() => {
    const button = ref.current;
    return () => {
      if (!button || document.activeElement !== button) return;
      moveFocusOutside(button.closest(ROOTS) ?? button);
    };
  }, [ref]);
};

const CloseButton = ({
  onClose,
  id,
  className,
  ariaLabel,
  size = "sm",
}: FeedbackCloseButtonProps & { onClose: (id?: string) => void }) => {
  const { t } = useWimTranslation(commonNs);
  const resolvedAriaLabel = ariaLabel ?? t("a11y.close");

  const ref = React.useRef<HTMLButtonElement>(null);
  useFocusHandoff(ref);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose(id);
  };

  return (
    <button
      ref={ref}
      type="button"
      className={className}
      onClick={handleClose}
      aria-label={resolvedAriaLabel}
    >
      <Icon component={CloseIcon} size={size} />
    </button>
  );
};
