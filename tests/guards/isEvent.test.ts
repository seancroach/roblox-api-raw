import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isEvent functions as intended", (t) => {
  t.true(RobloxApi.isEvent(Constants.event));
  t.true(RobloxApi.isEvent(Constants.eventWithTags));
  t.false(RobloxApi.isEvent({}));
});
