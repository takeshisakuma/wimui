import React, { useState, useEffect } from "react";
import { ColorPicker } from "../src/components/ColorPicker/ColorPicker";

/**
 * Helper to calculate relative luminance
 * https://www.w3.org/WAI/GL/wiki/Relative_luminance
 */
const getLuminance = (hex: string): number => {
    const rgb = hex.startsWith("#") ? hex.slice(1) : hex;
    const r = parseInt(rgb.substring(0, 2), 16) / 255;
    const g = parseInt(rgb.substring(2, 4), 16) / 255;
    const b = parseInt(rgb.substring(4, 6), 16) / 255;

    const transform = (val: number) => {
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    };

    return 0.2126 * transform(r) + 0.7152 * transform(g) + 0.0722 * transform(b);
};

/**
 * Helper to calculate contrast ratio
 * https://www.w3.org/WAI/GL/wiki/Contrast_ratio
 */
const getContrastRatio = (color1: string, color2: string): number => {
    const l1 = getLuminance(color1);
    const l2 = getLuminance(color2);

    const lightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);

    return (lightest + 0.05) / (darkest + 0.05);
};

export const ContrastChecker: React.FC = () => {
    const [bg, setBg] = useState("#007aff");
    const [fg, setFg] = useState("#ffffff");
    const [ratio, setRatio] = useState(0);

    useEffect(() => {
        try {
            const r = getContrastRatio(bg, fg);
            setRatio(r);
        } catch (e) {
            console.error(e);
        }
    }, [bg, fg]);

    const passesAA = ratio >= 4.5;
    const passesAAA = ratio >= 7;
    const passesAALarge = ratio >= 3;
    const passesAAALarge = ratio >= 4.5;

    return (
        <div className="wim-contrast-checker">
            <style>
                {`
                .wim-contrast-checker {
                    padding: 32px;
                    border: 1px solid var(--wim-color-border, rgba(0,0,0,0.1));
                    border-radius: 24px;
                    background: var(--bg-component, #fff);
                    margin: 32px 0;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                .wim-contrast-checker:hover {
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                }
                .wim-contrast-controls {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 32px;
                    margin-bottom: 32px;
                }
                .wim-contrast-control {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .wim-contrast-label {
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--text-tertiary, #999);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .wim-contrast-result {
                    display: flex;
                    gap: 40px;
                    align-items: center;
                    padding: 32px;
                    background: var(--bg-app, #f8f9fa);
                    border-radius: 20px;
                    border: 1px solid rgba(0,0,0,0.02);
                }
                .wim-contrast-ratio-display {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 140px;
                }
                .wim-contrast-ratio-value {
                    font-size: 48px;
                    font-weight: 900;
                    color: var(--text-primary);
                    line-height: 1;
                    margin-bottom: 4px;
                }
                .wim-contrast-ratio-unit {
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--text-tertiary);
                    text-transform: uppercase;
                }
                .wim-contrast-badges {
                    flex: 1;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                }
                .wim-contrast-badge {
                    padding: 16px;
                    border-radius: 12px;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
                    border: 1px solid rgba(0,0,0,0.03);
                    transition: transform 0.2s ease;
                }
                .wim-contrast-badge:hover {
                    transform: translateY(-2px);
                }
                .wim-contrast-badge-label {
                    font-weight: 500;
                    color: var(--text-secondary);
                }
                .wim-contrast-badge-status {
                    font-weight: 800;
                    font-size: 11px;
                    padding: 4px 10px;
                    border-radius: 6px;
                    letter-spacing: 0.02em;
                }
                .wim-contrast-status-pass {
                    color: #fff;
                    background: #28a745;
                }
                .wim-contrast-status-fail {
                    color: #fff;
                    background: #dc3545;
                }
                .wim-contrast-preview-container {
                    margin-top: 32px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(0,0,0,0.05);
                }
                .wim-contrast-preview {
                    padding: 40px;
                    text-align: center;
                    transition: all 0.3s ease;
                }
                .wim-contrast-preview-text-lg {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    display: block;
                }
                .wim-contrast-preview-text-sm {
                    font-size: 16px;
                    font-weight: 400;
                    opacity: 0.9;
                    display: block;
                }
                `}
            </style>

            <div className="wim-contrast-controls">
                <div className="wim-contrast-control">
                    <label className="wim-contrast-label">Background</label>
                    <ColorPicker value={bg} onChange={(e) => setBg(e.target.value)} fullWidth />
                </div>
                <div className="wim-contrast-control">
                    <label className="wim-contrast-label">Foreground</label>
                    <ColorPicker value={fg} onChange={(e) => setFg(e.target.value)} fullWidth />
                </div>
            </div>

            <div className="wim-contrast-result">
                <div className="wim-contrast-ratio-display">
                    <span className="wim-contrast-ratio-value">{ratio.toFixed(2)}</span>
                    <span className="wim-contrast-ratio-unit">Ratio</span>
                </div>
                <div className="wim-contrast-badges">
                    <div className="wim-contrast-badge">
                        <span className="wim-contrast-badge-label">Normal AA</span>
                        <span className={`wim-contrast-badge-status ${passesAA ? "wim-contrast-status-pass" : "wim-contrast-status-fail"}`}>
                            {passesAA ? "PASS" : "FAIL"}
                        </span>
                    </div>
                    <div className="wim-contrast-badge">
                        <span className="wim-contrast-badge-label">Large AA</span>
                        <span className={`wim-contrast-badge-status ${passesAALarge ? "wim-contrast-status-pass" : "wim-contrast-status-fail"}`}>
                            {passesAALarge ? "PASS" : "FAIL"}
                        </span>
                    </div>
                    <div className="wim-contrast-badge">
                        <span className="wim-contrast-badge-label">Normal AAA</span>
                        <span className={`wim-contrast-badge-status ${passesAAA ? "wim-contrast-status-pass" : "wim-contrast-status-fail"}`}>
                            {passesAAA ? "PASS" : "FAIL"}
                        </span>
                    </div>
                    <div className="wim-contrast-badge">
                        <span className="wim-contrast-badge-label">Large AAA</span>
                        <span className={`wim-contrast-badge-status ${passesAAALarge ? "wim-contrast-status-pass" : "wim-contrast-status-fail"}`}>
                            {passesAAALarge ? "PASS" : "FAIL"}
                        </span>
                    </div>
                </div>
            </div>

            <div className="wim-contrast-preview-container">
                <div className="wim-contrast-preview" style={{ backgroundColor: bg, color: fg }}>
                    <span className="wim-contrast-preview-text-lg">Design System Contrast Test</span>
                    <span className="wim-contrast-preview-text-sm">The quick brown fox jumps over the lazy dog.</span>
                </div>
            </div>

        </div>
    );
};
