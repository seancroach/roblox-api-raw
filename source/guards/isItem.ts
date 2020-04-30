import is from "@sindresorhus/is";
import { Item } from "../data";

export function isItem(value: unknown): value is Item {
	return (
		is.nonEmptyObject(value) &&
		is.nonEmptyString(value.Name) &&
		(is.undefined(value.Tags) || (is.array(value.Tags) && value.Tags.every(is.nonEmptyString)))
	);
}
