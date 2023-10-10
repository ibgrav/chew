import { test, expect } from "vitest";
import { find } from "./find";

test("find simple", () => {
  const data = find<boolean>("test", { test: true });
  expect(data).toEqual(true);
});

test("find deep", () => {
  const data = find<number>("test.one", { test: { one: 1 } });
  expect(data).toEqual(1);
});

test("find fallback", () => {
  const data = find<string>("test.one.two", {}, "fallback");
  expect(data).toEqual("fallback");
});
