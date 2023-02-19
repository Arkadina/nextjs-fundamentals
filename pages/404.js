import Layout from "../components/layout";
import SEOHead from "../components/SEOHead";

const NotFound = () => {
    return (
        <Layout>
            <SEOHead pageTitle="NextJS | NotFound" pageDesc="NotFound page" />
            <h1>Page not found 😐</h1>
            <h2>404</h2>
            <p>
                Sorry the page you were looking for at this URL was not found.
            </p>
        </Layout>
    );
};

export default NotFound;
