import { MemberBase } from "./MemberBase";
import { MemberType } from "./MemberType";
import { Parameter } from "./Parameter";

export interface Callback extends MemberBase<MemberType.Callback> {
  readonly Parameters: readonly Parameter[];
  readonly Security: string;
}
