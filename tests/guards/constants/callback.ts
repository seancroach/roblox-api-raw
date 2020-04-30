import * as RobloxApi from "../../../source";
import { item, itemWithTags } from "./item";
import { parameter } from "./parameter";

export const callback: RobloxApi.Callback = {
	...item,
	MemberType: RobloxApi.MemberType.Callback,
	Parameters: [parameter],
	Security: "Security",
};

export const callbackWithTags: RobloxApi.Callback = {
	...itemWithTags,
	...callback,
};
