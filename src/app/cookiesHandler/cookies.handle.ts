"use server";

import { cookies } from "next/headers";

export const setCookies = async (name: string, value: string) => {
    cookies().set({
        name,
        value,
        httpOnly: true,
        path: "/",
    });
};

export const deleteCookies = async (name: string) => {
    cookies().delete(name);
};
