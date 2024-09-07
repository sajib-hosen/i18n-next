import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies, setCookies } from "./cookies.handle";

const LOGIN_COOKIES = "token";

export const login = async (router: AppRouterInstance) => {
    await setCookies(LOGIN_COOKIES, "login");
    router.push("/");
};

export const logout = async () => {
    await deleteCookies(LOGIN_COOKIES);
};
