export declare const isDev: boolean;
/**
 * Emit a deprecation warning in development mode only.
 * No-ops in production builds.
 */
export declare function warnDeprecated(componentName: string, propName: string, alternative: string): void;
