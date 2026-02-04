import React from "react";
import PropTypes from "prop-types";
import "./code.scss";

type CodeProps = {
    children: React.ReactNode;
    block?: boolean;
    language?: string;
    className?: string;
};

export const Code = ({ children, block = false, language, className }: CodeProps) => {
    const Component = block ? "pre" : "code";
    const languageClass = language ? `language-${language}` : "";

    return (
        <Component
            className={[
                "wim-code",
                block ? "wim-code--block" : "wim-code--inline",
                languageClass,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {block ? <code className={languageClass}>{children}</code> : children}
        </Component>
    );
};

Code.propTypes = {
    children: PropTypes.node.isRequired,
    block: PropTypes.bool,
    language: PropTypes.string,
    className: PropTypes.string,
};
