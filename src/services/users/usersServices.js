import { account } from "@/config/appwriteClient";
import { v4 as uuidv4 } from "uuid";
// 01. Create New User
export async function createUser(data) {
  const { email, password, name } = data;
  return await account.create(uuidv4(), email, password, name);
}
// 02. Login User and return session
export async function loginUser(data) {
  const { email, password } = data;
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
  // Url TO be changed Later
  return await account.createRecovery(
    email,
    "http://localhost:3000/dashboard/settings/password"
  );
}
