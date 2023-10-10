import { expect, test } from "vitest";
import { parse } from "./parse";
import { render } from "./render";

test("render", () => {
  const list = parse("<div>{{ test }}</div>");

  const result = render(list, { test: true });
  console.log(result);

  expect(result).toEqual("<div>true</div>");
});
