import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip/Tooltip";

type CopyButtonProps = {
  value: string;
  size?: "small" | "medium" | "large";
  className?: string;
  "aria-label"?: string;
};

export const CopyButton = ({
  value,
  size = "medium",
  className,
  "aria-label": ariaLabel,
}: CopyButtonProps) => {
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
      console.error("Failed to copy: ", err);
    }
  };

  const labelText = copied ? "Copied" : "Copy to clipboard";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          priority="tertiary"
          size={size}
          iconName={copied ? "CheckIcon" : "CopyIcon"}
          role={copied ? "positive" : "default"}
          onClick={handleCopy}
          className={classNames("wim-copy-button", className)}
          aria-label={ariaLabel || labelText}
        />
      </TooltipTrigger>
      <TooltipContent>{labelText}</TooltipContent>
    </Tooltip>
  );
};
