import React from "react";
import classNames from "classnames";
import "./code.scss";

type CodeProps = {
  children?: React.ReactNode;
  code?: string;
  block?: boolean;
  language?: string;
  className?: string;
};

export const Code = ({
  children,
  code,
  block = false,
  language,
  className,
}: CodeProps) => {
  const Component = block ? "pre" : "code";

  return (
    <Component
      className={classNames(
        "wim-code",
        block ? "wim-code--block" : "wim-code--inline",
        language && `language-${language}`,
        className,
      )}
    >
      {block ? (
        <code className={language && `language-${language}`}>
          {code || children}
        </code>
      ) : (
        code || children
      )}
    </Component>
  );
};
