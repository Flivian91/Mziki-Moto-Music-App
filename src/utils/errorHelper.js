import { ZodError } from "zod";

export function handleError(error) {
  if (error instanceof ZodError) {
    return { status: 400, message: error.message, errors: error.errors };
  }
  return {
    status: error.status || 500,
    message: error.message || "Internal Server Error",
  };
}
