import is from "@sindresorhus/is";
import { EnumItem } from "../data";
import { isItem } from "./isItem";

export function isEnumItem(value: unknown): value is EnumItem {
  return is.nonEmptyObject(value) && isItem(value) && is.number(value.Value);
}
