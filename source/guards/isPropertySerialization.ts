import is from "@sindresorhus/is";
import { PropertySerialization } from "../data";

export function isPropertySerialization(value: unknown): value is PropertySerialization {
	return is.nonEmptyObject(value) && is.boolean(value.CanLoad) && is.boolean(value.CanSave);
}
