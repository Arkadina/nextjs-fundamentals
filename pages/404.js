import { useRouter } from "next/router";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import styles from "./404.module.scss";

const NotFound = () => {
    const router = useRouter();
    return (
        <Layout>
            <SEOHead pageTitle="NextJS | NotFound" pageDesc="NotFound page" />
            <div className={styles.container}>
                <h1>Page not found 😐</h1>
                <h2>
                    Error 404: the page <i>{router.asPath}</i> does not exist.
                </h2>
                <p>
                    Sorry, but the page you were looking for at this URL was not
                    found.
                </p>
            </div>
        </Layout>
    );
};

export default NotFound;
