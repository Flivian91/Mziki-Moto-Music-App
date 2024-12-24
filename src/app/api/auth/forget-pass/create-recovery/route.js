import { createRecoveryEmail } from "@/services/users/usersServices";
import { userRecoverySchema } from "@/validation/users/userValidator";
import { NextResponse } from "next/server";

// POST, req: email, url
export async function POST(req) {
  try {
    const data = await req.json();
    const validatedData = userRecoverySchema.parse(data);
    const res = await createRecoveryEmail(validatedData);
    return NextResponse.json()
  } catch (error) {}
}
