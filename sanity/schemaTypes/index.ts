import { type SchemaTypeDefinition } from "sanity";

import { authorType } from "./authorType";
import { sturtupType } from "./sturtupType";
import { categoryType } from "./categoryType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, sturtupType, categoryType],
};
