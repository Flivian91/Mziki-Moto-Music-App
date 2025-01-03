import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/api/authMiddleware";
import { logMiddleware } from "./middlewares/api/logMiddleware";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(req) {
  if (req.url.includes("/api/auth/register")) {
    const logResults = logMiddleware(req);
    console.log(logResults.response);
  }
  const authResults = authMiddleware(req);
  if (authResults?.isValid) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  return NextResponse.next();
}