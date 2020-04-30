import test from "ava";
import * as RobloxApi from "../source";

test("getApiDump retrieves the latest API Dump", async (t) => {
	const apiDump = await RobloxApi.getApiDump();
	t.true(RobloxApi.isApiDump(apiDump));
	t.false(RobloxApi.isApiDump({}));
});
