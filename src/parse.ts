import { ParseList } from "./types";

const OPENER = "{{";
const CLOSER = "}}";

export function parse(template: string): ParseList {
  let key = "";
  let str = "";
  let open = false;

  const length = template.length;
  const list: ParseList = [];

  for (let i = 0; i < length; i++) {
    const char = template[i];
    const trailing = char + (template[i - 1] || "");

    if (trailing === OPENER) {
      open = true;
      continue;
    }

    if (trailing === CLOSER) {
      key = key.trim();
      if (key) list.push(["k", key]);

      key = "";
      open = false;

      continue;
    }

    const leading = char + (template[i + 1] || "");

    if (open) {
      if (leading !== CLOSER) {
        key += char;
      }

      continue;
    }

    /* closed */

    if (leading === OPENER) {
      if (str) list.push(str);
      str = "";

      continue;
    }

    str += char;
  }

  // include trailing string after parsing is complete
  if (str) list.push(str);

  return list;
}
