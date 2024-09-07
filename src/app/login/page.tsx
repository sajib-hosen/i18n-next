"use client";

import Link from "next/link";
import React from "react";
import { login, logout } from "../cookiesHandler/server.wrapper";
// import { Link } from "../../../i18n/routing";

// thanks to
// >> https://next-intl-docs.vercel.app/
// >> https://chatgpt.com/c/66dbbfe0-b638-8010-930e-2005cc059627

const page = () => {
    return (
        <div className=" text-center">
            <p>login</p>
            <br />
            <div className=" space-x-7">
                <button onClick={login}>Login</button>
                <Link href={"/"}>Back home</Link>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default page;
