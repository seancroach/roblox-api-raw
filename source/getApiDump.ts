import got from "got";
import { ApiDump } from "./data";
import { getLatestVersion } from "./getLatestVersion";

/**
 * Retrieves the Roblox API dump for the given `version`. If no `version` is
 * supplies, `getApiDump` simply retrieves the latest version.
 *
 * @param version
 * *Optional*. The Roblox version to use. Defaults to the latest version.
 */
export async function getApiDump(version?: string): Promise<ApiDump> {
	const versionToUse = version ?? (await getLatestVersion());
	const response = await got(`http://setup.roblox.com/${versionToUse}-API-Dump.json`);
	const dump: ApiDump = JSON.parse(response.body);
	return dump;
}
