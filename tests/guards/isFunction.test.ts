import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isFunction functions as intended", (t) => {
  t.true(RobloxApi.isFunction(Constants.func));
  t.true(RobloxApi.isFunction(Constants.funcWithTags));
  t.false(RobloxApi.isFunction({}));
});
