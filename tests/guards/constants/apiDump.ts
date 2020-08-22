import * as RobloxApi from "../../../source";

import { clazz, clazzWithTags } from "./class";
import { enumValue, enumValueWithTags } from "./enum";

export const apiDump: RobloxApi.ApiDump = {
  Classes: [clazz, clazzWithTags],
  Enums: [enumValue, enumValueWithTags],
  Version: 1,
};
