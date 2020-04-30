import { Item } from "./Item";
import { MemberType } from "./MemberType";
import { PropertySecurity } from "./PropertySecurity";

export interface MemberBase<TypeKind extends MemberType> extends Item {
	readonly MemberType: TypeKind;
	readonly Security: string | PropertySecurity;
}
