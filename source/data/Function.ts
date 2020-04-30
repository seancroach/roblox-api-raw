import { MemberBase } from "./MemberBase";
import { MemberType } from "./MemberType";
import { Parameter } from "./Parameter";
import { Type } from "./Type";

export interface Function extends MemberBase<MemberType.Function> {
	readonly Parameters: Parameter[];
	readonly ReturnType: Type;
	readonly Security: string;
}
