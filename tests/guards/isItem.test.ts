import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isItem functions as intended", (t) => {
  t.true(RobloxApi.isItem(Constants.item));
  t.true(RobloxApi.isItem(Constants.itemWithTags));
  t.false(RobloxApi.isItem({}));
});
