import { createRecoveryEmail } from "@/services/users/usersServices";
import { handleError } from "@/utils/errorHelper";
import { userRecoverySchema } from "@/validation/users/userValidator";
import { NextResponse } from "next/server";

// POST, req: email, url
export async function POST(req) {
  try {
    const data = await req.json();
    const validatedData = userRecoverySchema.parse(data);
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
