import { Class } from "./Class";
import { Enum } from "./Enum";

export interface ApiDump {
	readonly Classes: readonly Class[];
	readonly Enums: readonly Enum[];
	readonly Version: number;
}
