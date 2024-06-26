import { NextResponse } from "next/server";
import withAuth from "next-auth/middleware"; // Assume withAuth is the correct import for the middleware functionality

// Define the middleware function
function middleware(req) {
  console.log(req.nextauth);
  if (
    req.nextUrl.pathname === "/console" && req.nextauth.token?.role !== "admin"
  ) {
    return new NextResponse("You are not authorized!");
    
  }
  if (
    req.nextUrl.pathname === "/addJob" && req.nextauth.token?.role !== "admin"
  ) {
    return new NextResponse("You are not authorized!");
    
  }


}

// Export the middleware with additional configuration using withAuth
export default withAuth(middleware, {
  callbacks: {
    authorized: (params) => {
      let { token } = params;
      return !!token;
    },
  },
});

export const config = { matcher: ["/dashboard","/console","/addJob"] };