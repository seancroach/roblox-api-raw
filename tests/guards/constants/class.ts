import * as RobloxApi from "../../../source";

import { callback, callbackWithTags } from "./callback";
import { event, eventWithTags } from "./event";
import { func, funcWithTags } from "./function";
import { item, itemWithTags } from "./item";
import { property, propertyWithTags } from "./property";

export const clazz: RobloxApi.Class = {
	...item,
	Members: [
		callback,
		callbackWithTags,
		event,
		eventWithTags,
		func,
		funcWithTags,
		property,
		propertyWithTags,
	],
	MemoryCategory: "MemoryCategory",
	Superclass: "Superclass",
};

export const clazzWithTags: RobloxApi.Class = {
	...itemWithTags,
	...clazz,
};
