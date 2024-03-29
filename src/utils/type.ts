import zod from "zod";

export const responseType = zod.object({
  zone: zod.string(),
  organization_id: zod.number(),
  total_distance: zod.number(),
  item_type: zod.string(),
});
