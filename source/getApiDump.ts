import is from "@sindresorhus/is";
import { ApiDump } from "./data";
import { getFromSetup } from "./util";
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
  const path = `${versionToUse}-API-Dump.json`;
  const text = await getFromSetup(path);
  const dump: ApiDump = JSON.parse(text);

  // To keep our type-information true, guard against unknown schemas of the
  // Roblox API Dump.
  if (is.number(dump.Version) && dump.Version !== 1) {
    const issuesUrl = "https://github.com/seancroach/roblox-api-raw/issues";
    const message = `Unknown Roblox API Dump version, '${dump.Version}', please create a new issue here: ${issuesUrl}`;
    throw new Error(message);
  }

  return dump;
}
