import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isEnum functions as intended", (t) => {
  t.true(RobloxApi.isEnum(Constants.enumValue));
  t.true(RobloxApi.isEnum(Constants.enumValueWithTags));
  t.false(RobloxApi.isEnum({}));
});
