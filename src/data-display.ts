// `wimui/data-display` category barrel (subpath entry) — PEER-FREE (T17).
// Only the peer-free core components are re-exported here, so importing this
// barrel never pulls an optional peer. The peer-dependent components moved to
// dedicated subpaths whose names document their peer:
//   Markdown       → wimui/data-display/markdown          (react-markdown, remark-gfm)
//   QRCode         → wimui/data-display/qr-code           (qrcode.react)
//   NodeGraph      → wimui/data-display/node-graph        (@xyflow/react)
//   ScheduleView   → wimui/data-display/schedule-view     (@fullcalendar/*)
//   JsonDiffViewer → wimui/data-display/json-diff-viewer  (diff)
export * from "./data-display-core";
