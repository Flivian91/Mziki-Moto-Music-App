import { ZodError } from "zod";

export function handleError(error) {
  if (error instanceof ZodError) {
    const formattedErrors = error.errors.map(
      (e) => `${e.path[0]}: ${e.message}`
    );
    return { status: 400, message: error.message };
  }
  return {
    status: error.status || 500,
    message: error.message || "Internal Server Error",
  };
}
