import { account } from "@/config/appwriteClient";

export async function sendVerificationEmail(email) {
  try {
    const session = await account.getSession();
    if (!session) {
      throw new Error("User is not authenticated");
    }
    await account.createVerification(email, "http://localhost:3000/dashboard/verify");
  } catch (error) {
    throw new Error(`Failed to send verification email: ${error.message}`);
  }
}