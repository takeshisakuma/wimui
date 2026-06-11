import type React from "react";
import { isDev } from "@/utilities/dev-utils";

export type IconComponentType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// 文字列ベースのアイコン指定（<Icon name="..."> / <Button icon="...">）を
// 支える実行時レジストリ。空で開始し、`wimui/icons`（src/icons.ts）の import で
// 全アイコンが登録される。これにより name API を使わない利用者のバンドルには
// アイコン群が含まれない。
export const registeredIcons: Record<string, IconComponentType> = {};

const warned = new Set<string>();

export function registerIcons(icons: Record<string, IconComponentType>): void {
  Object.assign(registeredIcons, icons);
}

export function warnUnregisteredIcon(name: string): void {
  if (!isDev || warned.has(name)) return;
  warned.add(name);
  console.warn(
    `[wimui] Icon "${name}" is not registered. ` +
      'Add `import "wimui/icons";` once at your app entry to enable string-based icon names, ' +
      "or pass the icon component directly via the `component` prop.",
  );
}
