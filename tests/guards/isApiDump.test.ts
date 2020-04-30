import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isApiDump functions as intended", (t) => {
	t.true(RobloxApi.isApiDump(Constants.apiDump));
	t.false(RobloxApi.isApiDump({}));
});
