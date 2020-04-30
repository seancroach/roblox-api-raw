import * as RobloxApi from "../../../source";
import { type } from "./type";

export const parameter: RobloxApi.Parameter = {
	Name: "Name",
	Type: type,
};

export const parameterWithDefault: RobloxApi.Parameter = {
	...parameter,
	Default: "Default",
};
