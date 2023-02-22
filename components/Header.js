import styles from "./Header.module.scss";
import Image from "next/image";
import nextjsIcon from "../public/nextjs-original.svg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function Header() {
    const router = useRouter();
    const [input, setInput] = useState();
    function handleOnClick(e) {
        router.push(`/users/${input}`);
    }

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
                            <Link href="/404" className={styles.link}>
                                Not Found
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={styles.link}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.inputGroup}>
                    <div>
                        users/
                        <input
                            type="text"
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <button onClick={(e) => handleOnClick()}>Buscar</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
