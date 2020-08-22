import is from "@sindresorhus/is";
import { Class } from "../data";
import { isItem } from "./isItem";
import { isMember } from "./isMember";

export function isClass(value: unknown): value is Class {
  return (
    is.nonEmptyObject(value) &&
    isItem(value) &&
    is.array(value.Members) &&
    value.Members.every(isMember) &&
    is.nonEmptyString(value.MemoryCategory) &&
    is.nonEmptyString(value.Superclass)
  );
}
