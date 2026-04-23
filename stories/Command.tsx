import React, { useState, useEffect } from 'react';
import { Icon } from 'wimui';
import './command.scss';

interface CommandProps {
  children: string;
}

export const Command = ({ children }: CommandProps) => {
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
      await navigator.clipboard.writeText(children);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="wim-doc-command">
      <div className="wim-doc-command__content">
        <code>{children}</code>
      </div>
      <button 
        className={`wim-doc-command__copy-button ${copied ? 'is-copied' : ''}`}
        onClick={handleCopy}
        title={copied ? 'Copied!' : 'Copy to clipboard'}
        aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
      >
        <Icon name={copied ? 'CheckIcon' : 'CopyIcon'} size="sm" />
      </button>
    </div>
  );
};
