import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isPropertySecurity functions as intended", (t) => {
  t.true(RobloxApi.isPropertySecurity(Constants.propertySecurity));
  t.false(RobloxApi.isPropertySecurity({}));
});
