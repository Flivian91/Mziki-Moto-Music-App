import { checkUser } from "@/services/auth/authServices";
import { handleError } from "@/utils/errorHelper";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await checkUser();
    return NextResponse.json({ message: "Logged In", user }, { status: 200 });
  } catch (error) {
    const { status, message } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}
