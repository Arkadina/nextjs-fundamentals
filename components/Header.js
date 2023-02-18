import styles from "./Header.module.scss";
import Image from "next/image";
import nextLOGO from "../public/nextjs-original.svg";

function Header() {
    return (
        <div>
            <div className={styles.headerTop}></div>
            <div className={styles.headerDown}>
                <div className={styles.headerDownLogo}>
                    <p>NextJS Fundamentals</p>
                    <Image
                        src={nextLOGO}
                        alt="nextjs logo"
                        priority
                        width={25}
                        height={25}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
