import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/layouts/layout";

import {
    KakaoLoginButton,
    GoogleLoginButton,
    LoginButtonWrap,
    LoginBox,
    LoginWrap,
} from "../styles/pages/signin";

export default function SignIn() {
    const { data: sessionData, status } = useSession();
    return (
        <>
            {sessionData ? (
                <>
                    <button
                        onClick={() => {
                            signOut({ callbackUrl: "/signin" });
                        }}
                    >
                        Sign out
                    </button>
                    <img src={sessionData.user.image}></img>
                </>
            ) : (
                <LoginWrap>
                    <LoginBox>
                        <KakaoLoginButton
                            onClick={() =>
                                signIn("kakao", { callbackUrl: "/" })
                            }
                        >
                            kakao
                        </KakaoLoginButton>
                        <GoogleLoginButton
                            onClick={() =>
                                signIn("google", { callbackUrl: "/" })
                            }
                        >
                            google
                        </GoogleLoginButton>
                    </LoginBox>
                </LoginWrap>
            )}
        </>
    );
}

SignIn.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
