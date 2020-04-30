import test from "ava";

import is from "@sindresorhus/is";
import { getLatestVersion } from "../source/getLatestVersion";

test("getLatestVersion gets the latest version", async (t) => {
	const latestVersion = await getLatestVersion();
	t.true(is.nonEmptyString(latestVersion));
});
