// Dedicated subpath entry for a peer-dependent component (T278).
// RichTextEditor is built on Tiptap (optional peers: @tiptap/react, @tiptap/pm,
// @tiptap/core, @tiptap/starter-kit, @tiptap/extensions). Split out of `wimui/form`
// so the form barrel and the root stay peer-free.
export * from "../components/form/RichTextEditor/RichTextEditor";
