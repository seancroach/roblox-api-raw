import * as RobloxApi from "../../../source";

import { item, itemWithTags } from "./item";

export const enumItem: RobloxApi.EnumItem = {
  ...item,
  Value: 0,
};

export const enumItemWithTags: RobloxApi.EnumItem = {
  ...itemWithTags,
  ...enumItem,
};
