/* eslint-disable react/prop-types */
import { useTheme } from "../context/useTheme";
import styles from "./Menu.module.scss";

function Menu({ show, setShow }) {
  const { theme } = useTheme();
  // if (!show) return null;
  return (
    <div
      className={`${styles.menu} ${show ? styles.showMenu : ""} ${
        styles[theme]
      }`}
    >
      <button onClick={() => setShow((show) => !show)}>
        <i className="fa fa-angle-right"></i>
      </button>
      menu
    </div>
  );
}

export default Menu;
