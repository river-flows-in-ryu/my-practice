import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const sessionOptions = {
    password: process.env.IRON_SESSION_PASSWORD,
    cookieName: "my-pracice",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};
// api 감싸주기
export function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}
// ssr 함수 감싸기
export function withSessionSsr(handler) {
    return withIronSessionSsr(handler, sessionOptions);
}
