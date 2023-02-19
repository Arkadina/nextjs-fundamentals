import Head from "next/head";

export default function SEOHead({ pageTitle, pageDesc }) {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDesc} />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link rel="icon" href="./static/nextjs-original.ico" />
        </Head>
    );
}
