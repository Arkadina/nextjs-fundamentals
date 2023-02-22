import Footer from "./Footer";
import Header from "./Header";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
}
