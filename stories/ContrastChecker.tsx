import React, { useState, useEffect } from "react";
import { ColorPicker } from "../src/components/ColorPicker/ColorPicker";

/**
 * Event for signaling color change to ContrastChecker
 */
export const SIGNAL_COLOR_CHANGE = "WIM_SIGNAL_COLOR_CHANGE";

/**
 * Helper to resolve colors (handles hex, rgb, and CSS variables)
 */
const resolveToHex = (color: string): string => {
    if (!color) return "#000000";
    if (color.startsWith("#")) return color;

    if (typeof document !== "undefined") {
        const temp = document.createElement("div");
        temp.style.color = color;
        temp.style.display = "none";
        document.body.appendChild(temp);
        const computed = getComputedStyle(temp).color;
        document.body.removeChild(temp);

        const match = computed.match(/\d+/g);
        if (match && match.length >= 3) {
            const r = parseInt(match[0]).toString(16).padStart(2, "0");
            const g = parseInt(match[1]).toString(16).padStart(2, "0");
            const b = parseInt(match[2]).toString(16).padStart(2, "0");
            return `#${r}${g}${b}`;
        }
    }
    return color;
};

const getLuminance = (hex: string): number => {
    const resolved = resolveToHex(hex);
    const rgb = resolved.startsWith("#") ? resolved.slice(1) : resolved;
    if (rgb.length !== 7 && rgb.length !== 6) {
        if (rgb.length === 3 || (rgb.length === 4 && resolved.startsWith("#"))) {
            const start = rgb.length === 4 ? 1 : 0;
            const r = parseInt(rgb[start] + rgb[start], 16) / 255;
            const g = parseInt(rgb[start + 1] + rgb[start + 1], 16) / 255;
            const b = parseInt(rgb[start + 2] + rgb[start + 2], 16) / 255;
            const transform = (v: number) => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
            return 0.2126 * transform(r) + 0.7152 * transform(g) + 0.0722 * transform(b);
        }
        return 0;
    }

    const start = rgb.length === 7 ? 1 : 0;
    const r = parseInt(rgb.substring(start, start + 2), 16) / 255;
    const g = parseInt(rgb.substring(start + 2, start + 4), 16) / 255;
    const b = parseInt(rgb.substring(start + 4, start + 6), 16) / 255;

    const transform = (val: number) => {
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    };

    return 0.2126 * transform(r) + 0.7152 * transform(g) + 0.0722 * transform(b);
};

const getContrastRatio = (color1: string, color2: string): number => {
    const l1 = getLuminance(color1);
    const l2 = getLuminance(color2);
    const lightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);
    return (lightest + 0.05) / (darkest + 0.05);
};

export const ContrastChecker: React.FC = () => {
    const [bgInput, setBgInput] = useState("var(--color-primary)");
    const [fgInput, setFgInput] = useState("var(--color-text-on-primary)");
    const [resolvedBg, setResolvedBg] = useState("#007aff");
    const [resolvedFg, setResolvedFg] = useState("#ffffff");
    const [ratio, setRatio] = useState(0);

    useEffect(() => {
        // Listen for global color signals from ColorSwatch
        const handleSignal = (e: any) => {
            if (e.detail?.type === "bg") setBgInput(e.detail.value);
            if (e.detail?.type === "fg") setFgInput(e.detail.value);
        };
        window.addEventListener(SIGNAL_COLOR_CHANGE, handleSignal);
        return () => window.removeEventListener(SIGNAL_COLOR_CHANGE, handleSignal);
    }, []);

    useEffect(() => {
        const hexBg = resolveToHex(bgInput);
        const hexFg = resolveToHex(fgInput);
        setResolvedBg(hexBg);
        setResolvedFg(hexFg);
        setRatio(getContrastRatio(hexBg, hexFg));
    }, [bgInput, fgInput]);

    const passesAA = ratio >= 4.5;
    const passesAALarge = ratio >= 3;

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
                }
                .wim-contrast-controls {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 32px;
                    margin-bottom: 24px;
                }
                .wim-contrast-control {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    min-width: 0;
                }
                .wim-contrast-label {
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--text-tertiary, #999);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .wim-contrast-inputs {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    width: 100%;
                    min-width: 0;
                }
                .wim-text-input {
                    flex: 1;
                    min-width: 0;
                    padding: 8px 12px;
                    border-radius: 8px;
                    border: 1px solid var(--wim-color-border);
                    font-family: inherit;
                    font-size: 14px;
                    background: var(--bg-app);
                    color: var(--text-primary);
                    width: 100%;
                }
                .wim-contrast-result {
                    display: flex;
                    gap: 40px;
                    align-items: center;
                    padding: 32px;
                    background: var(--bg-app, #f8f9fa);
                    border-radius: 20px;
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
                    background: var(--bg-component);
                    border: 1px solid rgba(0,0,0,0.03);
                }
                .wim-contrast-badge-status {
                    font-weight: 800;
                    font-size: 11px;
                    padding: 4px 10px;
                    border-radius: 6px;
                }
                .wim-contrast-status-pass {
                    color: #10b981;
                    background: #ecfdf5;
                }
                .wim-contrast-status-fail {
                    color: #ef4444;
                    background: #fef2f2;
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
                    <div className="wim-contrast-inputs">
                        <ColorPicker
                            value={resolvedBg}
                            onChange={(e) => setBgInput(e.target.value)}
                        />
                        <input
                            className="wim-text-input"
                            value={bgInput}
                            onChange={(e) => setBgInput(e.target.value)}
                            placeholder="#000000 or var(...)"
                        />
                    </div>
                </div>
                <div className="wim-contrast-control">
                    <label className="wim-contrast-label">Foreground</label>
                    <div className="wim-contrast-inputs">
                        <ColorPicker
                            value={resolvedFg}
                            onChange={(e) => setFgInput(e.target.value)}
                        />
                        <input
                            className="wim-text-input"
                            value={fgInput}
                            onChange={(e) => setFgInput(e.target.value)}
                            placeholder="#ffffff or var(...)"
                        />
                    </div>
                </div>
            </div>

            <div className="wim-contrast-result">
                <div className="wim-contrast-ratio-display">
                    <span className="wim-contrast-ratio-value">{ratio.toFixed(2)}</span>
                    <span className="wim-contrast-ratio-unit">Ratio</span>
                </div>
                <div className="wim-contrast-badges">
                    <div className="wim-contrast-badge">
                        <span>Normal Text</span>
                        <span className={`wim-contrast-badge-status ${passesAA ? "wim-contrast-status-pass" : "wim-contrast-status-fail"}`}>
                            {passesAA ? "PASS (AA)" : "FAIL (AA)"}
                        </span>
                    </div>
                    <div className="wim-contrast-badge">
                        <span>Large Text</span>
                        <span className={`wim-contrast-badge-status ${passesAALarge ? "wim-contrast-status-pass" : "wim-contrast-status-fail"}`}>
                            {passesAALarge ? "PASS (AA)" : "FAIL (AA)"}
                        </span>
                    </div>
                </div>
            </div>

            <div className="wim-contrast-preview-container">
                <div className="wim-contrast-preview" style={{ backgroundColor: resolvedBg, color: resolvedFg }}>
                    <span className="wim-contrast-preview-text-lg">Design System Contrast Test</span>
                    <span className="wim-contrast-preview-text-sm">The quick brown fox jumps over the lazy dog.</span>
                </div>
            </div>
        </div>
    );
};
