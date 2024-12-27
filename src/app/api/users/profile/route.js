// Perform the following steps:
// 1. Perform GET request to fetch user details using userId from dynamic route
// 2.Perform Update request to update user details using userId from dynamic route
// 3. Perform DELETE request to delete user details using userId from dynamic route
// 4.On each Router handle check if UserId is valid or not
// 5. If userId is not valid then send 404 status with message "User not found"

import { databases } from "@/config/appwriteClient";
import { handleError } from "@/utils/errorHelper";
import { Query } from "appwrite";
import { NextResponse } from "next/server";

// GET User Details
export async function POST(req) {
  try {
    // const searchParams = req.nextUrl.searchParams;
    // const userId = searchParams.get("userId");
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: "User Id is Not provided" },
        { status: 404 }
      );
    }
    // Fetch user details using userId
    const userDetails = await databases.listDocuments(
      process.env.DATABASE_ID,
      process.env.USERS_COLLECTION_ID,
      [Query.equal("$id", userId)]
    );

    if (userDetails.total === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(userDetails.documents[0], { status: 200 });
  } catch (error) {
    const { message, status } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}

// Update User Details
export async function PATCH(req) {
  try {
    const { userId, updatedData } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: "User Id is Not provided" },
        { status: 404 }
      );
    }

    // Fetch user details using userId
    const updatedUserDetails = await databases.updateDocument(
      process.env.DATABASE_ID,
      process.env.USERS_COLLECTION_ID,
      userId,
      updatedData
    );

    if (updatedUserDetails.code === 404) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Record Updated Successfully", updatedUserDetails },
      { status: 200 }
    );
  } catch (error) {
    const { message, status } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}
