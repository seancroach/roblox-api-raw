import is from "@sindresorhus/is";
import { MemberType, Property } from "../data";
import { isMemberBase } from "./isMemberBase";
import { isPropertySecurity } from "./isPropertySecurity";
import { isPropertySerialization } from "./isPropertySerialization";
import { isType } from "./isType";

export function isProperty(value: unknown): value is Property {
	return (
		is.nonEmptyObject(value) &&
		isMemberBase(value) &&
		is.nonEmptyString(value.Category) &&
		value.MemberType === MemberType.Property &&
		isPropertySecurity(value.Security) &&
		isPropertySerialization(value.Serialization) &&
		isType(value.ValueType)
	);
}
