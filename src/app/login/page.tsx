"use client";

import Link from "next/link";
import React from "react";
import { login, logout } from "../cookiesHandler/server.wrapper";
import { useRouter } from "next/navigation";

// thanks to
// >> https://next-intl-docs.vercel.app/
// >> https://chatgpt.com/c/66dbbfe0-b638-8010-930e-2005cc059627

const LoginPage = () => {
    const router = useRouter();

    return (
        <div className=" text-center p-10">
            <p>login</p>
            <br />
            <div className=" space-x-7">
                <button onClick={() => login(router)}>Login</button>
                <Link href={"/"}>Back home</Link>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default LoginPage;
