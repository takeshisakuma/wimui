// Data-display components with no optional peer dependency — safe for the root
// `wimui` barrel. The full `wimui/data-display` barrel (src/data-display.ts)
// re-exports this plus the peer-heavy components (Markdown → react-markdown,
// QRCode → qrcode.react, NodeGraph → @xyflow/react, ScheduleView →
// @fullcalendar), which are only reachable via `wimui/data-display` (not the root barrel).
export * from "./components/data-display/Accordion/Accordion";
export * from "./components/data-display/Avatar/Avatar";
export * from "./components/data-display/AvatarGroup/AvatarGroup";
export * from "./components/data-display/Badge/Badge";
export * from "./components/data-display/Calendar/Calendar";
export * from "./components/data-display/Calendar/RangeCalendar";
export * from "./components/data-display/Card/Card";
export * from "./components/data-display/Carousel/Carousel";
export * from "./components/data-display/Chip/Chip";
export * from "./components/data-display/DataGrid/DataGrid";
export * from "./components/data-display/DescriptionList/DescriptionList";
export * from "./components/data-display/EmptyState/EmptyState";
export * from "./components/data-display/Kanban/Kanban";
export * from "./components/data-display/List/List";
export * from "./components/data-display/Marquee/Marquee";
export * from "./components/data-display/Stats/Stats";
export * from "./components/data-display/Table/Table";
export * from "./components/data-display/Tag/Tag";
export * from "./components/data-display/Timeline/Timeline";
export * from "./components/data-display/TreeView/TreeView";
export * from "./components/data-display/TreeDiagram/TreeDiagram";
export * from "./components/data-display/VirtualList/VirtualList";
export * from "./components/data-display/FAQSection/FAQSection";
export * from "./components/data-display/InfiniteScroll/InfiniteScroll";
export * from "./components/data-display/SortableList/SortableList";
export * from "./components/data-display/SwipeAction/SwipeAction";
// 器だけを公開する。`useSwipeableList` は SwipeAction が内部で読む文脈なので出さない（hooks 単体は公開しない方針）。
export { SwipeableList } from "./components/data-display/SwipeAction/SwipeableList";
export type { SwipeableListProps } from "./components/data-display/SwipeAction/SwipeableList";
export * from "./components/data-display/PullToRefresh/PullToRefresh";
export * from "./components/data-display/JsonViewer/JsonViewer";
export * from "./components/data-display/CalendarHeatmap/CalendarHeatmap";
export * from "./components/data-display/Reaction/Reaction";
export * from "./components/data-display/Leaderboard/Leaderboard";
export * from "./components/data-display/RelativeTime/RelativeTime";
export * from "./components/data-display/Comment/Comment";
export * from "./components/data-display/Countdown/Countdown";
export * from "./components/data-display/Presence/Presence";
export * from "./components/data-display/Barcode/Barcode";
