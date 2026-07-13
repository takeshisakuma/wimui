import { describe, expect, it } from "vitest";
import { getFieldErrorFlag, getFieldErrorMessage } from "./fieldError";

describe("getFieldErrorMessage", () => {
  it("returns undefined for empty error", () => {
    expect(getFieldErrorMessage(undefined)).toBeUndefined();
  });

  it("returns the root message", () => {
    expect(getFieldErrorMessage({ type: "required", message: "Required" })).toBe("Required");
  });

  it("ignores empty message strings", () => {
    expect(getFieldErrorMessage({ type: "required", message: "" })).toBeUndefined();
  });

  it("finds a nested message when root has none", () => {
    expect(
      getFieldErrorMessage({
        type: "custom",
        message: undefined,
        email: { type: "email", message: "Invalid email" },
      } as never),
    ).toBe("Invalid email");
  });
});

describe("getFieldErrorFlag", () => {
  it("is true when a message exists", () => {
    expect(getFieldErrorFlag({ type: "required", message: "Required" })).toBe(true);
  });

  it("is false when error is undefined", () => {
    expect(getFieldErrorFlag(undefined)).toBe(false);
  });
});
