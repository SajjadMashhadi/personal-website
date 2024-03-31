import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useTheme } from "../context/useTheme";

const names = {
  en: { contact: "Contact me", background: "My background", skills: "Skills" },
  fa: { contact: "ارتباط با من", background: "سابقه", skills: "مهارت ها" },
};

function Navbar() {
  const { theme, lang } = useTheme();
  return (
    <div className={styles.navbarContainer}>
      <div className={`${styles.navbar} ${styles[theme]}`}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/"}
        >
          {names[lang].contact}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/myBackground"}
        >
          {names[lang].background}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to={"/skills"}
        >
          {names[lang].skills}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
