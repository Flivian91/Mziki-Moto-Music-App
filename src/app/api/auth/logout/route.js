import { account } from "@/config/appwriteClient";
import { handleError } from "@/utils/errorHelper";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Retrieve session ID from the request headers
    const sessionId = req.headers.get("x-session");

    if (!sessionId) {
      return NextResponse.json(
        { message: "Session ID is missing or invalid." },
        { status: 401 }
      );
    }

    // Validate and destroy the session
    try {
      await account.deleteSession("current");
    } catch (error) {
      // Handle cases where the session might already be invalid or not exist
      return NextResponse.json(
        { message: "Failed to log out. Session might be invalid or already expired." },
        { status: 400 }
      );
    }

    // Successful logout
    return NextResponse.json({ message: "User logged out successfully." }, { status: 200 });
  } catch (error) {
    // Centralized error handling
    const { status, message } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}
