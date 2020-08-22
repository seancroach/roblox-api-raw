import is from "@sindresorhus/is";
import { Enum } from "../data";
import { isEnumItem } from "./isEnumItem";
import { isItem } from "./isItem";

export function isEnum(value: unknown): value is Enum {
  return (
    is.nonEmptyObject(value) &&
    isItem(value) &&
    is.array(value.Items) &&
    value.Items.every(isEnumItem)
  );
}
