// Handle the user Profile details

import { databases } from "@/config/appwriteClient";
import { Query } from "appwrite";

// Handle th UserId Services
export async function userDataServices(data) {
  const { userId } = data;
  
  try {
    if (!userId) {
      throw new Error("User Id is Not provided");
    }

    // Fetch user details using userId
    const userDetails = await databases.listDocuments(
      process.env.DATABASE_ID,
      process.env.USERS_COLLECTION_ID,
      [Query.equal("$id", userId)]
    );

    if (userDetails.total === 0) {
      throw new Error("User not found");
    }
    return userDetails;
  } catch (error) {
    throw new Error(error);
  }
}
// Hnadle the user Update Services
export async function updateUserServices(userId, updatedData) {
  try {
    if (!userId) {
      throw new Error("User Id is Not provided");
    }
    if (!updatedData) {
      throw new Error("Updated Data is Not provided");
    }

    // Fetch user details using userId
    const updatedUserDetails = await databases.updateDocument(
      process.env.DATABASE_ID,
      process.env.USERS_COLLECTION_ID,
      userId,
      updatedData
    );

    if (updatedUserDetails.code === 404) {
      throw new Error("User not found");
    }
    return updatedUserDetails;
  } catch (error) {
    throw new Error(error);
  }
}
