import styles from "./Header.module.scss";
import Image from "next/image";
import nextjsIcon from "../public/nextjs-original.svg";
import Link from "next/link";

function Header() {
    return (
        <div>
            <div className={styles.headerTop}></div>
            <div className={styles.headerDown}>
                <div className={styles.headerDownLogo}>
                    <p>NextJS</p>
                    <Image
                        src={nextjsIcon}
                        alt="nextjs logo"
                        priority
                        width={20}
                        height={20}
                    />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
