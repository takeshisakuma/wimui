import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

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

    return (
        <Button
            priority="tertiary"
            size={size}
            iconName={copied ? "CheckIcon" : "CopyIcon"}
            role={copied ? "positive" : "default"}
            onClick={handleCopy}
            className={className}
            aria-label={ariaLabel || (copied ? "Copied" : "Copy to clipboard")}
            title={copied ? "Copied" : "Copy to clipboard"}
        />
    );
};

CopyButton.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    className: PropTypes.string,
    "aria-label": PropTypes.string,
};
