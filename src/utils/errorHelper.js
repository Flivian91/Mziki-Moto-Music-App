import { ZodError } from "zod";

export function handleError(error) {
  if (error instanceof ZodError) {
    const formattedErrors = `Validation errors: ${error.errors
      .map((err) => `${err.path.join(".")}: ${err.message}`)
      .join(", ")}`;
    return { status: 400, message: formattedErrors };
  }
  return {
    status: error.status || 500,
    message: error.message || "Internal Server Error",
  };
}
