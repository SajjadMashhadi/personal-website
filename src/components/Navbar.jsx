import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/"}
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/about"}
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
