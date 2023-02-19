import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../public/github-original.svg";

function Footer() {
    return (
        <div className={styles.footer}>
            <p>made with heart </p>
            <ul>
                <li>
                    <Link href="https://github.com/Arkadina">
                        <Image
                            src={githubIcon}
                            alt="github icon"
                            priority
                            width={20}
                            height={20}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
