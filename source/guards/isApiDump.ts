import is from "@sindresorhus/is";
import { ApiDump } from "../data";
import { isClass } from "./isClass";
import { isEnum } from "./isEnum";

export function isApiDump(value: unknown): value is ApiDump {
  return (
    is.nonEmptyObject(value) &&
    is.nonEmptyArray(value.Classes) &&
    value.Classes.every(isClass) &&
    is.nonEmptyArray(value.Enums) &&
    value.Enums.every(isEnum) &&
    is.number(value.Version)
  );
}
