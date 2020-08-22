import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isType functions as intended", (t) => {
  t.true(RobloxApi.isType(Constants.type));
  t.false(RobloxApi.isApiDump({}));
});
