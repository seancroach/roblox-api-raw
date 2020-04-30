import { Member } from "../data";
import { isCallback } from "./isCallback";
import { isEvent } from "./isEvent";
import { isFunction } from "./isFunction";
import { isProperty } from "./isProperty";

export function isMember(value: unknown): value is Member {
	return isCallback(value) || isEvent(value) || isFunction(value) || isProperty(value);
}
