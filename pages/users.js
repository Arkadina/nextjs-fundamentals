import axios from "axios";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

import styles from "./users.module.scss";

export default function Users({ users }) {
    return (
        <Layout>
            <SEOHead pageTitle="NextJS | Users" pageDesc="Users page" />
            <div className={styles.container}>
                <h1>Users! </h1>
                <p>You are at /users.</p>
            </div>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    console.log(params);
    const res = await axios.get("https://api.github.com/users");
    const users = res.data;

    return {
        props: {
            users,
        },
    };
}
