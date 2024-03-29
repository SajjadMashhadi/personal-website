import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? styles.isActive : ""
        }
        to={"/"}
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? styles.isActive : ""
        }
        to={"/about"}
      >
        About
      </NavLink>
    </div>
  );
}

export default Navbar;
