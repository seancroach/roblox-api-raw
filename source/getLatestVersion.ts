import { getFromSetup } from "./util";
/**
 * Retrieves the latest version of Roblox Studio.
 */
export async function getLatestVersion(): Promise<string> {
  const version = await getFromSetup("versionQTStudio");
  return version;
}
