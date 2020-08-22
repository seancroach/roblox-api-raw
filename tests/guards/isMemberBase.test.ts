import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isMemberBase functions as intended", (t) => {
  t.true(RobloxApi.isMemberBase(Constants.callback));
  t.true(RobloxApi.isMemberBase(Constants.callbackWithTags));

  t.true(RobloxApi.isMemberBase(Constants.event));
  t.true(RobloxApi.isMemberBase(Constants.eventWithTags));

  t.true(RobloxApi.isMemberBase(Constants.func));
  t.true(RobloxApi.isMemberBase(Constants.funcWithTags));

  t.true(RobloxApi.isMemberBase(Constants.property));
  t.true(RobloxApi.isMemberBase(Constants.propertyWithTags));

  t.false(RobloxApi.isMemberBase({}));
});
