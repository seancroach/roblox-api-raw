import got from "got";

/**
 * Retrieves the latest version of Roblox Studio.
 */
export async function getLatestVersion(): Promise<string> {
	const response = await got("http://setup.roblox.com/versionQTStudio");
	return response.body;
}
