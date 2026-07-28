import { isDev } from "./dev-utils";

const warned = new Set<string>();

/**
 * Warn once, in development only, that a prop value type-checks but has no
 * styles behind it — so it renders as if nothing was passed.
 *
 * The caller decides by looking up the CSS module rather than by consulting a
 * list, so this cannot drift: add the missing class and the warning stops on
 * its own, add a size to `ComponentSize` without styling it and the warning
 * starts on its own.
 *
 * @param component Component name as the consumer writes it, e.g. `"Card"`
 * @param prop      Prop name, e.g. `"radius"`
 * @param value     The value that has no styles
 * @param supported The values that do, for the message
 */
export function warnUnstyledValue(
  component: string,
  prop: string,
  value: string,
  supported: readonly string[],
): void {
  if (!isDev) return;

  const key = `${component}.${prop}=${value}`;
  if (warned.has(key)) return;
  warned.add(key);

  console.warn(
    `[wimui] ${component} has no styles for ${prop}="${value}", so it renders ` +
      `as if you had not set ${prop} at all. Supported: ${supported.join(", ")}.`,
  );
}

/** Test seam — the warn-once cache is module state. */
export function resetUnstyledValueWarnings(): void {
  warned.clear();
}
