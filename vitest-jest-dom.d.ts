// jest-dom のマッチャー（toBeInTheDocument など）の型を、vitest 5 の expect に乗せる。
//
// vitest 4 までは `Assertion` が `jest.Matchers` を継いでいたので、`@testing-library/jest-dom` の
// 型（`jest.Matchers` を広げる）がそのまま効いていた。vitest 5 はその橋を外し、広げる場所を `Matchers<R, T>` にした。
// `@testing-library/jest-dom@7.0.1` の `/vitest` の型は `Assertion<T>`（型引数 1 つ）を広げる書き方で、
// vitest 5 の `Assertion<R, T>`（2 つ）とは宣言が合わない。jest-dom が vitest 5 に追随したら、このファイルは消せる。
//
// 実行時の登録は `test-setup.ts` の `import "@testing-library/jest-dom"` が持つ。ここは型だけ。
import "vitest";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-object-type
  interface Matchers<R extends void | Promise<void> = void | Promise<void>, T = unknown>
    extends TestingLibraryMatchers<unknown, R> {}
}
