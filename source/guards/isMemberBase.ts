import is from "@sindresorhus/is";
import { MemberBase, MemberType } from "../data";
import { isItem } from "./isItem";
import { isMemberType } from "./isMemberType";
import { isPropertySecurity } from "./isPropertySecurity";

export function isMemberBase(value: unknown): value is MemberBase<MemberType> {
	return (
		is.nonEmptyObject(value) &&
		isItem(value) &&
		isMemberType(value.MemberType) &&
		(is.string(value.Security) || isPropertySecurity(value.Security))
	);
}
