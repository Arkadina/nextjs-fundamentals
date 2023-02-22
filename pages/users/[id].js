import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import SEOHead from "../../components/SEOHead";

import styles from "./users.module.scss";

export default function User({ user }) {
    const router = useRouter();
    console.log(router);
    console.log(...user);
    return (
        <Layout>
            <SEOHead
                pageTitle={`NextJS | ${user[0] ? user[0].login : "User"} `}
                pageDesc="User page"
            />
            <div className={styles.container}>
                <h1>You are at {router.asPath}.</h1>
                <p></p>
                <p>User: {user[0] ? user[0].login : "not found 🙄"}.</p>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const ids = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        40, 41, 42, 43, 44, 45,
    ];

    const paths = ids.map((item) => ({
        params: {
            id: item.toString(),
        },
    }));

    console.log(paths);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log(params);
    const res = await axios.get("https://api.github.com/users");
    const users = res.data;
    const data = users.filter((item) => item.id == params.id);

    return {
        props: {
            user: data,
        },
    };
}

// Server-side Rendering: getServerSideProps()
