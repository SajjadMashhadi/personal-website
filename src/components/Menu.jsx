/* eslint-disable react/prop-types */
import { useTheme } from "../context/useTheme";
import styles from "./Menu.module.scss";
import Navbar from "./Navbar";
import ToggleButton from "./ToggleButton";

function Menu({ show, setShow }) {
  const { theme } = useTheme();
  // if (!show) return null;
  return (
    <>
      <div
        onClick={() => setShow((show) => !show)}
        className={`${show ? styles.showBackMenu : styles.backMenu}`}
      ></div>
      <div
        className={`${styles.menu} ${show ? styles.showMenu : ""} ${
          styles[theme]
        }`}
      >
        <div className={styles.buttonContainer}>
          <ToggleButton type="close" show={show} setShow={setShow} />
          <ToggleButton type="theme" />
          <ToggleButton type="lang" />
        </div>
        <div className={styles.NavContainer}>
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Menu;
