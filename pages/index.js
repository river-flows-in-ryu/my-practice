import React from "react";
import useSWR from "swr";

import { withSessionSsr } from "../lib/withSession";
import Layout from "../components/layouts/layout";

import { Main } from "../styles/pages";

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
    if (!data) {
        return <>loading</>;
    }
    return (
        //
        <Main>{data.result}</Main>
    );
}

Index.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
