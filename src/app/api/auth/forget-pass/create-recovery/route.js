import { createRecoveryEmail } from "@/services/auth/authServices";
import { handleError } from "@/utils/errorHelper";
import { userRecoverySchema } from "@/validation/auth/authValidator";
import { NextResponse } from "next/server";

// POST, req: email, url
export async function POST(req) {
  try {
    const data = await req.json();
    // Validate the Req data
    const validatedData = userRecoverySchema.parse(data);
    // Send the validated data to Application layer
    const res = await createRecoveryEmail(validatedData);
    return NextResponse.json(
      { message: "Recovery email sent on your Email", data: res },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}
