import zod from "zod";

export const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});
