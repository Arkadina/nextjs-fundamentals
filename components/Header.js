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
                            <Link href="/" className={styles.link}>
                                Index
                            </Link>
                        </li>
                        <li>
                            <Link href="/users" className={styles.link}>
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link href="/users" className={styles.link}>
                                Not Found
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={styles.link}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className={styles.link}>
                                Users
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.inputGroup}>
                    <div>
                        users/
                        <input type="text" />
                    </div>
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
