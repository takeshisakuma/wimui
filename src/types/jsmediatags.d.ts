declare module "jsmediatags/build2/jsmediatags.js" {
  interface JsMediaTags {
    read(
      url: string,
      callbacks: { onSuccess: (tag: unknown) => void; onError: (err: unknown) => void },
    ): void;
  }
  const jsmediatags: JsMediaTags;
  export default jsmediatags;
}
