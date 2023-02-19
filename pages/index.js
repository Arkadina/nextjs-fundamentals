import Layout from "../components/layout";
import SEOHead from "../components/SEOHead";

function HomePage() {
    return (
        <Layout>
            <SEOHead pageTitle="NextJS | Home" pageDesc="Home page" />
            <div>Welcome to Next.js!</div>
        </Layout>
    );
}

export default HomePage;
