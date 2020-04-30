import { Type } from "./Type";

export interface Parameter {
	readonly Default?: string;
	readonly Name: string;
	readonly Type: Type;
}
