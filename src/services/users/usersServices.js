import { account, databases } from "@/config/appwriteClient";
import { sendVerificationEmail } from "@/utils/email";
import { Query } from "appwrite";
import { v4 as uuidv4 } from "uuid";
// 01. Create New User
export async function createUser(data) {
  const { email, password, name, username } = data;
  if (!email || !password || !name || !username) {
    throw new Error("Invalid Data");
  }
  // check if Email already exists
  const emailExists = await databases.listDocuments(
    process.env.DATABASE_ID,
    process.env.USERS_COLLECTION_ID,
    [Query.equal("email", email)]
  );
  if (emailExists.documents.length > 0) {
    throw new Error("Email is already in use.");
  }
  // Check if Username already exists
  const usernameExists = await databases.listDocuments(
    process.env.DATABASE_ID,
    process.env.USERS_COLLECTION_ID,
    [Query.equal("username", username)]
  );
  if (usernameExists.documents.length > 0) {
    throw new Error("Username is already in use.");
  }

  // create user on appwrite account
  const user = await account.create(uuidv4(), email, password, name);
  // Send Verification Email

  // save user to database
  await databases.createDocument(
    process.env.DATABASE_ID,
    process.env.USERS_COLLECTION_ID,
    user.$id,
    {
      email,
      username,
      name,
    }
  );
  // Save user Preference on the database
  await databases.createDocument(
    process.env.DATABASE_ID,
    process.env.PREFERENCE_COLLECTION_ID,
    uuidv4(), // Generate a unique ID for the preference document
    {
      userId: user.$id,
      theme: "light",
      notifications: true,
    }
  );
  return user;
}
// 02. Login User and return session
export async function loginUser(data) {
  const { email, password } = data;
  if (!email || !password) {
    throw new Error("Invalid Data");
  }
  return await account.createEmailPasswordSession(email, password);
}

// 03. Check User Authenticated State
export async function checkUser() {
  return await account.get();
}

// 04.Check User Preference

// 05. Update User Preference

// 06. Forget Password to create Recovery Email
export async function createRecoveryEmail(data) {
  const { email } = await data;
  if (!email) {
    throw new Error("Invalid Data");
  }
  // Url TO be changed Later
  return await account.createRecovery(
    email,
    "http://localhost:3000/dashboard/settings/password"
  );
}

// 07.Update Password From then Recovery Email
export async function updateRecoveryEmail(data) {
  const { user_id, secret, password } = data;
  if (!user_id || !secret || !password) {
    throw new Error("Invalid Data");
  }
  return await account.updateRecovery(user_id, secret, password);
}
// 08. Update Email Verification
export async function updateEmailVerification(data) {
  const { userId, secret } = data;
  if (!userId || !secret) {
    throw new Error("Invalid Data");
  }
  return await account.updateVerification(userId, secret);
}
