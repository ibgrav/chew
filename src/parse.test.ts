import { expect, test } from "vitest";
import { parse } from "./parse";

test("parse", () => {
  const list = parse("<div>{{ test }}</div>");
  console.log(list);
  expect(list).toEqual(["<div>", ["k", "test"], "</div>"]);
});
