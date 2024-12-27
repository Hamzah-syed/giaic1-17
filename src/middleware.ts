// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// /**
//  * Middleware function to handle authentication and redirection based on the user's login status.
//  *
//  * @param {NextRequest} request - The incoming request object.
//  * @returns {Promise<NextResponse>} - A promise that resolves to the appropriate NextResponse.
//  *
//  * This middleware checks the "isLoggedIn" cookie to determine the user's login status.
//  * - If the user is not logged in (isLoggedIn value is "0"), they are redirected to the login page.
//  * - If the user is logged in (isLoggedIn value is "1") and tries to access the login page, they are redirected to the home page.
//  * - Otherwise, the request proceeds to the next middleware or handler.
//  */
// export const middleware = async (request: NextRequest) => {
//     const cookiesStore = await cookies()
//     const isLoggedIn = cookiesStore.get("isLoggedIn")


//     if (isLoggedIn?.value === "0"){
//         return NextResponse.redirect(new URL('/login', request.url))
//     }
//     else if (
//         isLoggedIn?.value === "1" && 
//         request.nextUrl.pathname==="/login"
//     ){
//         return NextResponse.redirect(new URL('/', request.url))
//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher: ["/", "/login"],
// }



import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};