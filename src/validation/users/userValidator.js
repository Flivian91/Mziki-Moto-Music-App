const { z } = require("zod");

// Validation
// 01. Registration Validators
export const userRegisterSchema = z
  .object({
    name: z.string().toLowerCase(),
    email: z
      .string()
      .email({ message: "Invalid Email address!" })
      .toLowerCase(),
    username: z.string().trim(),
    password: z.coerce
      .string()
      .min(6, { message: "Password Must be 7 or more charaters long" }),
  })
  .required();

  //02. Login Validators
export const userLoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email address!" }).toLowerCase(),
  password: z.coerce
    .string()
    .min(6, { message: "Password Must be 7 or more charaters long" }),
});
