import { ParseList } from "./types";

export function render(list: ParseList, data: Record<string, unknown>): string {
  let result = "";
  const length = list.length;

  for (let i = 0; i < length; i++) {
    const item = list[i];

    if (Array.isArray(item)) {
      if (item[0] === "k") {
        const value = data[item[1]];

        if (value !== null && value !== undefined && typeof value !== "object") {
          result += value;
        }
      }

      continue;
    }

    result += item;
  }

  return result;
}
