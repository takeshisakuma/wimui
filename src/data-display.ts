// Full `wimui/data-display` category barrel (subpath entry). Re-exports the
// peer-free core plus the components that eagerly import an optional peer —
// importing this barrel (or the components below) requires their peer.
export * from "./data-display-core";
export * from "./components/data-display/Markdown/Markdown"; // react-markdown, remark-gfm
export * from "./components/data-display/QRCode/QRCode"; // qrcode.react
export * from "./components/data-display/NodeGraph/NodeGraph"; // @xyflow/react
export * from "./components/data-display/ScheduleView/ScheduleView"; // @fullcalendar
export * from "./components/data-display/JsonDiffViewer/JsonDiffViewer"; // diff (via CodeDiffViewer)
