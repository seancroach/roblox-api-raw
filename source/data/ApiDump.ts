import { Class } from "./Class";
import { Enum } from "./Enum";

/**
 * An object which represents the Roblox API *as-is*.
 */
export interface ApiDump {
	/**
	 * The classes currently a part of the Roblox API.
	 */
	readonly Classes: readonly Class[];

	/**
	 * The enums currently a part of the Roblox API.
	 */
	readonly Enums: readonly Enum[];

	/**
	 * The current version of the Roblox API Dump schema. In a vaccum, this
	 * value is not very helpful.
	 */
	readonly Version: 1;
}
