import test from "ava";
import * as RobloxApi from "../../source";

test("isMemberType functions as intended", (t) => {
  t.true(RobloxApi.isMemberType(RobloxApi.MemberType.Callback));
  t.true(RobloxApi.isMemberType(RobloxApi.MemberType.Event));
  t.true(RobloxApi.isMemberType(RobloxApi.MemberType.Function));
  t.true(RobloxApi.isMemberType(RobloxApi.MemberType.Property));
  t.false(RobloxApi.isMemberType({}));
});
