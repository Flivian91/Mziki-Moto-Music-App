// POST, req: user_id, secret, password

import { updateRecoveryEmail } from "@/services/auth/authServices";
import { handleError } from "@/utils/errorHelper";
import { userUpdateRecoveryEmail } from "@/validation/auth/authValidator";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    // Validate
    const validatedData = userUpdateRecoveryEmail.parse(data);
    const newUser = await updateRecoveryEmail(validatedData);

    return NextResponse.json(
      { message: "Password Reset Successfully", data: newUser },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}
