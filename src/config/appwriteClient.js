import { Account, Client, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  // .setKey(process.env.NEXT_APPWRITE_API_KEY);

export const account = new Account(client);
export const databases = new Databases(client);
