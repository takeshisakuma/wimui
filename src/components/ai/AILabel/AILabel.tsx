import React, { ReactNode } from "react";
import classNames from "classnames";
import type { Placement } from "@floating-ui/react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { aiNs } from "@/i18n/generated/ai";
import { Popover, PopoverTrigger, PopoverContent } from "../../overlay/Popover/Popover";
import type { ComponentSizeBasic } from "../../../types/tokens";
import localStyles from "./ai-label.module.scss";

export type AILabelProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "children" | "title" | "type"
> & {
  /**
   * What the AI did, shown when the label is pressed — for example which model
   * produced the value, from what, and how to check or replace it.
   */
  children: ReactNode;
  /**
   * Heading of the explanation. Defaults to the localized "AI-generated".
   */
  title?: ReactNode;
  /**
   * Size of the mark. `sm` fits inside a field or a table cell; `md` sits next
   * to a heading or in the corner of a card.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Preferred placement of the explanation.
   * @default "bottom-start"
   */
  placement?: Placement;
  /** Opens the explanation on the first render (uncontrolled). */
  defaultOpen?: boolean;
  /** Controls whether the explanation is open. */
  open?: boolean;
  /** Called when the explanation opens or closes. */
  onOpenChange?: (open: boolean) => void;
};

/**
 * AILabel marks a value or a block as produced by AI. It is a small button
 * that reads "AI"; pressing it opens an explanation the app provides.
 *
 * Composition Contract:
 * - Managed by: App consumption (the explanation is the app's content)
 * - Portal: The explanation renders through Popover (FloatingPortal)
 * - Scroll lock: No
 */
export const AILabel = React.forwardRef<HTMLButtonElement, AILabelProps>(
  (
    {
      children,
      title,
      size = "md",
      placement = "bottom-start",
      defaultOpen,
      open,
      onOpenChange,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation(aiNs);
    const titleId = React.useId();
    const name = t("ai_label.name");

    return (
      <Popover
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
        placement={placement}
        className={localStyles.anchor}
      >
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            className={classNames("wim-ai-label", localStyles.root, localStyles[size], className)}
            {...props}
            // 見えている「AI」が名前に含まれるように、名前は「AI が作成」（WCAG 2.5.3）。
            // 見えている文字だけだと、何の印かが読み上げで伝わらない。
            aria-label={ariaLabel ?? name}
          >
            <span className={localStyles.mark} data-part="mark" aria-hidden="true">
              {t("ai_label.text")}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className={localStyles.content}
          data-part="content"
          aria-labelledby={titleId}
        >
          <p id={titleId} className={localStyles.title} data-part="title">
            {title ?? name}
          </p>
          <div className={localStyles.body}>{children}</div>
        </PopoverContent>
      </Popover>
    );
  }
);

AILabel.displayName = "AILabel";
