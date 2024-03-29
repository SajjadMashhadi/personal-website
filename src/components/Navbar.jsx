import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  const theme = "dark";
  return (
    <div className={styles.navbarContainer}>
      <div className={`${styles.navbar} ${styles[theme]}`}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/"}
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/myBackground"}
        >
          My Background
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
