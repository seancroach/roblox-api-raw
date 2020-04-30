import { MemberBase } from "./MemberBase";
import { MemberType } from "./MemberType";
import { PropertySecurity } from "./PropertySecurity";
import { PropertySerialization } from "./PropertySerialization";
import { Type } from "./Type";

export interface Property extends MemberBase<MemberType.Property> {
	readonly Category: string;
	readonly MemberType: MemberType.Property;
	readonly Security: PropertySecurity;
	readonly Serialization: PropertySerialization;
	readonly ValueType: Type;
}
