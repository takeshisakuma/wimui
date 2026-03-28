export const isDev = import.meta.env.DEV;

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
