import axios from "axios";
import Layout from "../components/layout";

export default function Users({ users }) {
    return (
        <Layout>
            <p>Users</p>
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
