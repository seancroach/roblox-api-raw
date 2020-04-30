import * as RobloxApi from "../../../source";
import { item, itemWithTags } from "./item";
import { parameter } from "./parameter";

export const event: RobloxApi.Event = {
	...item,
	MemberType: RobloxApi.MemberType.Event,
	Parameters: [parameter],
	Security: "Security",
};

export const eventWithTags: RobloxApi.Event = {
	...itemWithTags,
	...event,
};
