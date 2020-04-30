import * as RobloxApi from "../../../source";

import { enumItem, enumItemWithTags } from "./enumItem";
import { item, itemWithTags } from "./item";

export const enumValue: RobloxApi.Enum = {
	...item,
	Items: [enumItem, enumItemWithTags],
};

export const enumValueWithTags: RobloxApi.Enum = {
	...itemWithTags,
	...enumValue,
};
