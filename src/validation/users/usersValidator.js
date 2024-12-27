import { z } from "zod";

// Zod schema for user data validation
export const userDataValidation = z.object({
  name: z.string().max(50, "Name cannot exceed 50 characters").optional(),
  email: z.string().email("Invalid email address").optional(),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username cannot exceed 30 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric")
    .optional(),
  hometown: z
    .string()
    .max(50, "Hometown cannot exceed 50 characters")
    .optional(),
  label: z.string().max(100, "Label cannot exceed 100 characters").optional(),
  website_url: z.string().url("Invalid website URL").optional(),
  biography: z
    .string()
    .max(300, "Biography cannot exceed 300 characters")
    .optional(),
  terms_conditions: z.literal(true, "You must accept the terms and conditions"),
  followers: z.array(z.string().uuid("Invalid follower ID")).optional(),
  following: z.array(z.string().uuid("Invalid following ID")).optional(),
  banner: z.string().url("Invalid banner URL").nullable().optional(),
  avatar: z.string().url("Invalid avatar URL").nullable().optional(),
});
export const listDetailValidation = z
  .object({
    userId: z.string().uuid({ message: "Invalid User Id" }),
  })
  .required();
