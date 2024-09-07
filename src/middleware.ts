import createMiddleware from "next-intl/middleware";
import { routing } from "../i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"; //

// const SECRET_KEY = "your-secret-key";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const acceptLanguage = req.headers.get("accept-language");
    console.log("cookies >>", acceptLanguage);
    if (acceptLanguage) {
        const languages = acceptLanguage
            .split(",")
            .map((lang) => lang.split(";")[0]);

        console.log("br l >>", languages);

        // const matchedLocale = languages.find((lang) =>
        //     supportedLocales.includes(lang)
        // );

        // if (matchedLocale) {
        //     return matchedLocale;
        // }
    }

    // If the request is for the login page, bypass authentication
    if (pathname === "/login") {
        return intlMiddleware(req); // Continue with locale handling without authentication
    }

    // Check if a token exists in the cookies (assuming the token is stored in cookies)
    const token = req.cookies.get("token");

    if (!token) {
        // Redirect to the login page if the token is missing
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return intlMiddleware(req);

    // try {
    //     // If you're using JWT, verify the token
    //     const user = jwt.verify(token.value, SECRET_KEY);

    //     // Attach the user to the request (optional, for use in other parts of the app)
    //     // req.user = user;

    //     // Continue with next-intl locale handling
    //     return intlMiddleware(req);
    // } catch (error) {
    //     // If the token is invalid, redirect to login
    //     return NextResponse.redirect(new URL("/login", req.url));
    // }
}

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(en|bn)/:path*"],
};
