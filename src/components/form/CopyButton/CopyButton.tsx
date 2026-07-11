import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
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
  /** Tooltip label before copying */
  copyLabel?: string;
  /** Tooltip label after copying */
  copiedLabel?: string;
};

export const CopyButton = ({
  value,
  size = "md",
  className,
  "aria-label": ariaLabel,
  copyLabel,
  copiedLabel,
}: CopyButtonProps) => {
  const { t } = useWimTranslation("common");
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
          variant="ghost"
          size={size}
          icon={copied ? "CheckIcon" : "CopyIcon"}
          intent={copied ? "success" : "default"}
          onClick={handleCopy}
          className={classNames("wim-copy-button", className)}
          aria-label={ariaLabel || labelText}

        />
      </TooltipTrigger>
      <TooltipContent>{labelText}</TooltipContent>
    </Tooltip>
  );
};
