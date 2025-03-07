import zod from "zod";

export const signupSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
  role: zod.string(),
});
