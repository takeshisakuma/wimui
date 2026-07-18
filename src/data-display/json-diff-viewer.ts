// Dedicated subpath entry for a peer-dependent component (T17).
// Split out of the category barrel so `wimui/data-display` stays peer-free.
// Importing this path requires the component's optional peer(s).
export * from "../components/data-display/JsonDiffViewer/JsonDiffViewer";
