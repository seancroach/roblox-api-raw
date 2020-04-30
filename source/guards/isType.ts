import is from "@sindresorhus/is";
import { Type } from "../data";

export function isType(value: unknown): value is Type {
	return (
		is.nonEmptyObject(value) && is.nonEmptyString(value.Category) && is.nonEmptyString(value.Name)
	);
}
