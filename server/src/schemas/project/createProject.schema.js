import zod from "zod";

export const createProjectSchema = zod.object({
  name: zod.string(),
  description: zod.string(),
});
