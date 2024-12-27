const { z } = require("zod");

// Validation
// 01. Registration Validators
export const userRegisterSchema = z
  .object({
    name: z
      .string()
      .toLowerCase()
      .max(128, { message: "Name cannot exceed 128 chars" }),
    email: z
      .string()
      .email({ message: "Invalid Email address!" })
      .toLowerCase(),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores."
      ),
    password: z.coerce
      .string()
      .max(128, { message: "Password Characters cannot exceed 128" })
      .min(8, { message: "Password Must be 8 or more charaters long" }),
  })
  .required();

//02. Login Validators
export const userLoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email address!" }).toLowerCase(),
  password: z.coerce
    .string()
    .min(8, { message: "Password Must be 8 or more charaters long" })
    .max(128, { message: "Password character cannot exceed 128" }),
});

// 03. Create Recovery Email
export const userRecoverySchema = z.object({
  email: z.string().email({ message: "Invalid Email address!" }).toLowerCase(),
});

// 04. Update Recovery Email
export const userUpdateRecoveryEmail = z.object({
  user_id: z.coerce.string(),
  secret: z.string(),
  password: z.coerce
    .string()
    .min(8, { message: "Password Must be 8 or more charaters long" })
    .max(128, { message: "Password characters cannot exceed 128" }),
});

// 05. Update Email Verification
export const updateEmailVerificationSchema = z.object({
  user_id: z.coerce.string(),
  secret: z.string(),
}).required();
