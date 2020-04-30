import { Item } from "./Item";
import { Member } from "./Member";

export interface Class extends Item {
	readonly Members: readonly Member[];
	readonly MemoryCategory: string;
	readonly Superclass: string;
}
