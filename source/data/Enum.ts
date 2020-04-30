import { EnumItem } from "./EnumItem";
import { Item } from "./Item";

export interface Enum extends Item {
	readonly Items: readonly EnumItem[];
}
