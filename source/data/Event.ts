import { MemberBase } from "./MemberBase";
import { MemberType } from "./MemberType";
import { Parameter } from "./Parameter";

export interface Event extends MemberBase<MemberType.Event> {
	readonly Parameters: readonly Parameter[];
	readonly Security: string;
}
