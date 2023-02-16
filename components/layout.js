import Footer from "./Footer";
import Header from "./Header";

import styles from "./layout.module.css";

export default function Layout({ children }) {
    return (
        <div className={styles.App}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
