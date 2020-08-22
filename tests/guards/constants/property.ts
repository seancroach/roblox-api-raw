import * as RobloxApi from "../../../source";
import { item, itemWithTags } from "./item";
import { propertySecurity } from "./propertySecurity";
import { propertySerialization } from "./propertySerialization";
import { type } from "./type";

export const property: RobloxApi.Property = {
  ...item,
  Category: "Category",
  MemberType: RobloxApi.MemberType.Property,
  Security: propertySecurity,
  Serialization: propertySerialization,
  ValueType: type,
};

export const propertyWithTags: RobloxApi.Property = {
  ...itemWithTags,
  ...property,
};
