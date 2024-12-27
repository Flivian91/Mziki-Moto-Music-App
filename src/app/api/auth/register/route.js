// Req: Full name, Email, username, password;
import { createUser } from "@/services/auth/authServices";
import { handleError } from "@/utils/errorHelper";
import { userRegisterSchema } from "@/validation/auth/authValidator";
import { NextResponse } from "next/server";

// Route
export async function POST(req) {
  try {
    const data = await req.json();
    // Validate againist the schema
    const validatedData = userRegisterSchema.parse(data);
    // Continue with validated Data
    const user = await createUser(validatedData);
    return NextResponse.json(
      { message: "User Created", data: user },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}
