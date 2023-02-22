import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

import styles from "./index.module.scss";

function HomePage() {
    return (
        <Layout>
            <SEOHead pageTitle="NextJS | Home" pageDesc="Home page" />
            <div className={styles.container}>
                <h1>Welcome to Next.js! </h1>
                <p>You are at index.</p>
            </div>
        </Layout>
    );
}

export default HomePage;
