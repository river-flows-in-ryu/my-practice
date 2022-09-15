import styled from "styled-components";

export const LoginButton = styled.button`
    width: 30rem;
    height: 4rem;
    border: initial;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const KakaoLoginButton = styled(LoginButton)`
    background-color: #fee10b;
    color: #fff;
`;

export const GoogleLoginButton = styled(LoginButton)`
    background-color: #fff;
    border: 1px solid #ddd;
`;

export const LoginBox = styled.div`
    width: 50rem;
    height: 50rem;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${(props) => props.theme.media.mobile} {
        width: 90%;
        height: 60%;
    }
`;

export const LoginWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
`;
