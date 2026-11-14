import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
/** Pricing metadata for a model, expressed per 1M tokens in the given currency. */
export type ModelPricing = {
    /** Input (prompt) price per 1M tokens */
    input?: number;
    /** Output (completion) price per 1M tokens */
    output?: number;
    /** Currency symbol shown before the price (default "$") */
    currency?: string;
};
/** A single selectable model with its display metadata. */
export type ModelOption = {
    /** Unique identifier of the model */
    id: string;
    /** Human-readable model name */
    name: string;
    /** Short description or the provider name */
    description?: string;
    /** Context window size in tokens (shown formatted, e.g. "128K") */
    contextLength?: number;
    /** Pricing metadata (per 1M tokens) */
    pricing?: ModelPricing;
    /** Short badge shown next to the name (e.g. "New", "Beta") */
    badge?: string;
    /** Whether the model cannot be selected */
    disabled?: boolean;
};
/** Labels for internationalization of the built-in meta text. */
export type ModelSelectorLabels = {
    /** Placeholder shown when nothing is selected */
    placeholder?: string;
    /** Prefix for the context-length meta (default "Context") */
    contextLabel?: string;
    /** Prefix for the input price meta (default "In") */
    inputLabel?: string;
    /** Prefix for the output price meta (default "Out") */
    outputLabel?: string;
    /** Suffix appended to prices (default "/1M") */
    perTokensLabel?: string;
    /** Accessible label for the trigger button */
    triggerAriaLabel?: string;
};
export interface ModelSelectorProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
    /** List of selectable models */
    models: ModelOption[];
    /** Selected model id (controlled) */
    value?: string;
    /** Initially selected model id (uncontrolled) */
    defaultValue?: string;
    /** Callback when the selected model changes */
    onChange?: (id: string, model: ModelOption) => void;
    /** Size of the trigger */
    size?: ComponentSizeBasic;
    /** Whether the selector is disabled */
    disabled?: boolean;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Whether to show pricing metadata in the dropdown */
    showPricing?: boolean;
    /** Whether to show the context-length metadata in the dropdown */
    showContext?: boolean;
    /** Labels for internationalization */
    labels?: ModelSelectorLabels;
    /** Additional class names */
    className?: string;
}
/**
 * ModelSelector is a dropdown for switching between AI models, surfacing the
 * metadata that matters when choosing one — context window and per-token pricing.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const ModelSelector: React.ForwardRefExoticComponent<ModelSelectorProps & React.RefAttributes<HTMLDivElement>>;
