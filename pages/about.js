import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

import styles from "./about.module.scss";

function About() {
    return (
        <Layout>
            <SEOHead pageTitle="NextJS | About" pageDesc="About page" />
            <div className={styles.container}>
                <h1>About </h1>
                <p>You are at /about.</p>
            </div>
        </Layout>
    );
}

export default About;
