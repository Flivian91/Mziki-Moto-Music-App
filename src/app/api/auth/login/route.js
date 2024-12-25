// POST, req: email, password

import { loginUser } from "@/services/users/usersServices";
import { handleError } from "@/utils/errorHelper";
import { userLoginSchema } from "@/validation/users/userValidator";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    // Validate
    const validatedData = userLoginSchema.parse(data);
    // Create Session, and passing the validated data to the Application Layer
    const session = await loginUser(validatedData);    
    if (!session) {
      return NextResponse.json(
        { message: "User doesn`t Exist!" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Login successfully", session },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}
