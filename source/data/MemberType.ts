/**
 * The possible `MemberType` values supported by `roblox-api-raw`. While
 * `roblox-api-raw` attempts to minimize the ammount of type-narrowing it does,
 * this is *the* exception.
 */
export enum MemberType {
	Callback = "Callback",
	Event = "Event",
	Function = "Function",
	Property = "Property",
}
