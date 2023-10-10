import { expect, test } from "vitest";
import { parse } from "./parse";

test("parse basic", () => {
  const list = parse("<div>{{test}}</div>");
  expect(list).toEqual(["<div>", ["k", "test"], "</div>"]);
});

test("parse whitespace", () => {
  const list = parse(`<div>{{
    test  
                                    }}</div>`);
  expect(list).toEqual(["<div>", ["k", "test"], "</div>"]);
});
