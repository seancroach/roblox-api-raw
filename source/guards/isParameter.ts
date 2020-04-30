import is from "@sindresorhus/is";
import { Parameter } from "../data";
import { isType } from "./isType";

export function isParameter(value: unknown): value is Parameter {
	return (
		is.nonEmptyObject(value) &&
		(is.undefined(value.Default) || is.string(value.Default)) &&
		is.nonEmptyString(value.Name) &&
		isType(value.Type)
	);
}
