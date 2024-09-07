import { deleteCookies, setCookies } from "./cookies.handle";

const LOGIN_COOKIES = "token";

export const login = async () => {
    await setCookies(LOGIN_COOKIES, "login");
};

export const logout = async () => {
    await deleteCookies(LOGIN_COOKIES);
};
