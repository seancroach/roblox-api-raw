import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isProperty functions as intended", (t) => {
  t.true(RobloxApi.isProperty(Constants.property));
  t.true(RobloxApi.isProperty(Constants.propertyWithTags));
  t.false(RobloxApi.isProperty({}));
});
