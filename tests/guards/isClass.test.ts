import test from "ava";
import * as RobloxApi from "../../source";
import * as Constants from "./constants";

test("isClass functions as intended", (t) => {
	t.true(RobloxApi.isClass(Constants.clazz));
	t.true(RobloxApi.isClass(Constants.clazzWithTags));
	t.false(RobloxApi.isClass({}));
});
