import React from "react";
import useSWR from "swr";

import { withSessionSsr } from "../lib/withSession";
import { useSession } from "next-auth/react";

import Layout from "../components/layouts/layout";

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
        return {
            props: {},
        };
    }
);

export default function Index({}) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR("/api/hello", fetcher);
    const { data: sessionData, status } = useSession();

    if (!data) {
        return <>loading</>;
    }
    return (
        //
        <>{sessionData ? <>{sessionData?.user?.name}</> : <>로그인하셈</>}</>
    );
}

Index.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
