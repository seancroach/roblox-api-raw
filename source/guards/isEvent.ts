import is from "@sindresorhus/is";
import { Event, MemberType } from "../data";
import { isMemberBase } from "./isMemberBase";
import { isParameter } from "./isParameter";

export function isEvent(value: unknown): value is Event {
  return (
    is.nonEmptyObject(value) &&
    isMemberBase(value) &&
    value.MemberType === MemberType.Event &&
    is.array(value.Parameters) &&
    value.Parameters.every(isParameter) &&
    is.nonEmptyString(value.Security)
  );
}
