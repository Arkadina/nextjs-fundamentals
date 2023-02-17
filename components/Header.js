import styles from "./Header.module.scss";

function Header() {
    return (
        <div>
            <div className={styles.headerTop}></div>
            <div className={styles.headerDown}></div>
        </div>
    );
}



export default Header;
