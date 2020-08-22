import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isEnumItem functions as intended", (t) => {
  t.true(RobloxApi.isEnumItem(Constants.enumItem));
  t.true(RobloxApi.isEnumItem(Constants.enumItemWithTags));
  t.false(RobloxApi.isEnumItem({}));
});
