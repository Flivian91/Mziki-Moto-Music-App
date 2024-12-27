import { updateEmailVerification } from "@/services/auth/authServices";
import { handleError } from "@/utils/errorHelper";
import { updateEmailVerificationSchema } from "@/validation/auth/authValidator";
import { NextResponse } from "next/server";

// POST, req secret, user_id
export async function POST(req) {
  try {
    const data = await req.body;
    // Validate the data
    const validatedData = updateEmailVerificationSchema.parse(data);
    // Continue with validated data
    await updateEmailVerification(validatedData);
    return {
      status: 200,
      body: { message: "Email Verified" },
    };
  } catch (error) {
    const { status, message } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}
