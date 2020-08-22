import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isMember functions as intended", (t) => {
  t.true(RobloxApi.isMember(Constants.callback));
  t.true(RobloxApi.isMember(Constants.callbackWithTags));

  t.true(RobloxApi.isMember(Constants.event));
  t.true(RobloxApi.isMember(Constants.eventWithTags));

  t.true(RobloxApi.isMember(Constants.func));
  t.true(RobloxApi.isMember(Constants.funcWithTags));

  t.true(RobloxApi.isMember(Constants.property));
  t.true(RobloxApi.isMember(Constants.propertyWithTags));

  t.false(RobloxApi.isMember({}));
});
