import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isParameter functions as intended", (t) => {
	t.true(RobloxApi.isParameter(Constants.parameter));
	t.true(RobloxApi.isParameter(Constants.parameterWithDefault));
	t.false(RobloxApi.isParameter({}));
});
