import is from "@sindresorhus/is";
import { Function, MemberType } from "../data";
import { isMemberBase } from "./isMemberBase";
import { isParameter } from "./isParameter";
import { isType } from "./isType";

export function isFunction(value: unknown): value is Function {
  return (
    is.nonEmptyObject(value) &&
    isMemberBase(value) &&
    value.MemberType === MemberType.Function &&
    is.array(value.Parameters) &&
    value.Parameters.every(isParameter) &&
    isType(value.ReturnType) &&
    is.nonEmptyString(value.Security)
  );
}
