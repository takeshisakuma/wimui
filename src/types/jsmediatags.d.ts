declare module "jsmediatags" {
  interface JsMediaTags {
    read(
      url: string,
      callbacks: { onSuccess: (tag: unknown) => void; onError: (err: unknown) => void },
    ): void;
  }
  const jsmediatags: JsMediaTags;
  export default jsmediatags;
}
