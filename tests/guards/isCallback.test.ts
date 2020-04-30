import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isCallback functions as intended", (t) => {
	t.true(RobloxApi.isCallback(Constants.callback));
	t.true(RobloxApi.isCallback(Constants.callbackWithTags));
	t.false(RobloxApi.isCallback({}));
});
