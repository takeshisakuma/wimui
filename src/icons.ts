// 文字列ベースのアイコン指定（<Icon name="..."> / <Button icon="..."> 等）を
// 有効化するオプトインエントリ。アプリのエントリポイントで一度 import する:
//   import "wimui/icons";
// このモジュールを import しない場合、アイコンはバンドルに含まれず、
// `component` prop / 個別アイコンの named import のみ利用できる。
import { ALL_ICONS } from "./icon";
import { registerIcons } from "./icon/registry";

registerIcons(ALL_ICONS);

export * from "./icon";
