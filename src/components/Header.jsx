import styles from "./Header.module.scss";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className={styles.header}>
      <Navbar />
    </div>
  );
}

export default Header;
