import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useTheme } from "../context/useTheme";

function Navbar() {
  const { theme } = useTheme();
  return (
    <div className={styles.navbarContainer}>
      <div className={`${styles.navbar} ${styles[theme]}`}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/"}
        >
          Contact me
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/myBackground"}
        >
          My background
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/skills"}
        >
          Skills
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
