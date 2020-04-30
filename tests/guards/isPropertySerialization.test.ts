import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isPropertySerialization functions as intended", (t) => {
	t.true(RobloxApi.isPropertySerialization(Constants.propertySerialization));
	t.false(RobloxApi.isPropertySerialization({}));
});
