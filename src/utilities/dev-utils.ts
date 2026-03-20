export const isDev = (import.meta as unknown as { env: { DEV: boolean } }).env.DEV;

/**
 * Emit a deprecation warning in development mode only.
 * No-ops in production builds.
 */
export function warnDeprecated(componentName: string, propName: string, alternative: string): void {
  if (isDev) {
    console.warn(
      `[${componentName}] The \`${propName}\` prop is deprecated. ${alternative}`,
    );
  }
}
