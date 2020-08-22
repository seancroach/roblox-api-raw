import is from "@sindresorhus/is";
import { PropertySecurity } from "../data";

export function isPropertySecurity(value: unknown): value is PropertySecurity {
  return (
    is.nonEmptyObject(value) && is.nonEmptyString(value.Read) && is.nonEmptyString(value.Write)
  );
}
