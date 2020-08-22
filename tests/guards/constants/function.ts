import * as RobloxApi from "../../../source";
import { item, itemWithTags } from "./item";
import { parameter } from "./parameter";
import { type } from "./type";

export const func: RobloxApi.Function = {
  ...item,
  MemberType: RobloxApi.MemberType.Function,
  Parameters: [parameter],
  ReturnType: type,
  Security: "Security",
};

export const funcWithTags: RobloxApi.Function = {
  ...itemWithTags,
  ...func,
};
