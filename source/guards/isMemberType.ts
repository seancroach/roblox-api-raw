import { MemberType } from "../data";

export function isMemberType(value: unknown): value is MemberType {
  return (
    value === MemberType.Callback ||
    value === MemberType.Event ||
    value === MemberType.Function ||
    value === MemberType.Property
  );
}
