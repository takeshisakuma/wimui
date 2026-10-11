import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { Button } from "../../form/Button/Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../../overlay/Tooltip/Tooltip";
import { isDev } from "@/utilities/dev-utils";
import { ComponentSizeBasic } from "../../../types/tokens";

type CopyButtonProps = {
  /** Text copied to the clipboard */
  value: string;
  /** Size of the button */
  size?: ComponentSizeBasic;
  /** Additional class names */
  className?: string;
  /** Accessible label for the button */
  "aria-label"?: string;
  /** ID of the element that labels the button. Takes precedence over `aria-label`. */
  "aria-labelledby"?: string;
  /** ID of the element that describes the button. */
  "aria-describedby"?: string;
  /** Tooltip label before copying */
  copyLabel?: string;
  /** Tooltip label after copying */
  copiedLabel?: string;
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Trigger content when `asChild` is true */
  children?: React.ReactNode;
};

export const CopyButton = ({
  value,
  size = "md",
  className,
  "aria-label": ariaLabel,
  // 参照で付ける名前と説明も、ボタンへ届ける（T340）。以前は受ける口が無く、渡しても捨てられていた。
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  copyLabel,
  copiedLabel,
  asChild = false,
  children,
}: CopyButtonProps) => {
  const { t } = useWimTranslation(commonNs);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch (err) {
      if (isDev) console.error("Failed to copy: ", err);
    }
  };

  const labelText = copied ? (copiedLabel ?? t("copied")) : (copyLabel ?? t("copy.to_clipboard"));

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild={asChild}
          variant="ghost"
          size={size}
          icon={asChild ? undefined : copied ? "CheckIcon" : "CopyIcon"}
          intent={copied ? "success" : "default"}
          onClick={handleCopy}
          className={classNames("wim-copy-button", className)}
          // aria-labelledby を渡したときも、aria-label は残す（参照が勝つので、名前は変わらない）。外すと、
          // Button が、名前の無いアイコンだけのボタンにアイコン名（"CopyIcon"）を名前として付ける。
          aria-label={ariaLabel || labelText}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
        >
          {asChild ? children : undefined}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{labelText}</TooltipContent>
    </Tooltip>
  );
};
