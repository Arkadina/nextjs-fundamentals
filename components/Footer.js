import styles from "./Footer.module.scss";
import Link from "next/link";

function Footer() {
    return (
        <div className={styles.footer}>
            Footer
            <ul>
                <li>
                    <Link href="#">2121</Link>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
