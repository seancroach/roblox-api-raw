import * as RobloxApi from "../../../source";

export const item: RobloxApi.Item = {
  Name: "name",
};

export const itemWithTags: RobloxApi.Item = {
  ...item,
  Tags: ["TagOne", "TagTwo", "TagThree"],
};
