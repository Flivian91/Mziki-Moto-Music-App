// Perform the following steps:
// 1. Perform GET request to fetch user details using userId from dynamic route
// 2.Perform Update request to update user details using userId from dynamic route
// 3. Perform DELETE request to delete user details using userId from dynamic route
// 4.On each Router handle check if UserId is valid or not
// 5. If userId is not valid then send 404 status with message "User not found"

import { databases } from "@/config/appwriteClient";
import {
  updateUserServices,
  userDataServices,
} from "@/services/users/userServices";
import { handleError } from "@/utils/errorHelper";
import {
  listDetailValidation,
  userDataValidation,
} from "@/validation/users/usersValidator";
import { NextResponse } from "next/server";

// GET User Details
export async function POST(req) {
  try {
    const data = await req.json();
    // validate userId
    const validatedUserId = listDetailValidation.safeParse(data);
    // Return user details
    const userData = await userDataServices(validatedUserId);

    return NextResponse.json(userData.documents[0], { status: 200 });
  } catch (error) {
    const { message, status } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}

// Update User Details
export async function PATCH(req) {
  try {
    const data = await req.json();
    // validate databases
    const validatedData = userDataValidation.parse(data.updatedData);
    // Update user details
    const validatedUserId = listDetailValidation.safeParse({
      userId: data.userId,
    });
    const updatedUserData = await updateUserServices(
      validatedUserId.data.userId,
      validatedData
    );

    return NextResponse.json(
      { message: "Record Updated Successfully", updatedUserData },
      { status: 200 }
    );
  } catch (error) {
    const { message, status } = handleError(error);
    return NextResponse.json({ message }, { status });
  }
}
