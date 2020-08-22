import is from "@sindresorhus/is";
import { Callback, MemberType } from "../data";
import { isMemberBase } from "./isMemberBase";
import { isParameter } from "./isParameter";

export function isCallback(value: unknown): value is Callback {
  return (
    is.nonEmptyObject(value) &&
    isMemberBase(value) &&
    value.MemberType === MemberType.Callback &&
    is.array(value.Parameters) &&
    value.Parameters.every(isParameter) &&
    is.nonEmptyString(value.Security)
  );
}
