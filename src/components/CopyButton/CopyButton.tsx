import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip/Tooltip";
import { isDev } from "@/utilities/dev-utils";
import { ComponentSize } from "../../types/tokens";

type CopyButtonProps = {
  value: string;
  size?: ComponentSize;
  className?: string;
  "aria-label"?: string;
};

export const CopyButton = ({
  value,
  size = "md",
  className,
  "aria-label": ariaLabel,
}: CopyButtonProps) => {
  const { t } = useTranslation();
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

  const labelText = copied ? t("copied") : t("copy.to_clipboard");

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size={size}
          icon={copied ? "CheckIcon" : "CopyIcon"}
          intent={copied ? "positive" : "default"}
          onClick={handleCopy}
          className={classNames("wim-copy-button", className)}
          aria-label={ariaLabel || labelText}
        />
      </TooltipTrigger>
      <TooltipContent>{labelText}</TooltipContent>
    </Tooltip>
  );
};
