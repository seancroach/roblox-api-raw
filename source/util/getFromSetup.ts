import got from "got";

export async function getFromSetup(path: string): Promise<string> {
  try {
    const response = await got(`https://setup.rbxcdn.com/${path}`);
    return response.body;
  } catch (error) {
    const message = `roblox-api-raw has encountered an error: ${error.response.body}`;
    throw new Error(message);
  }
}
