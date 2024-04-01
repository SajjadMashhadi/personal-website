/* eslint-disable react/prop-types */
import { useTheme } from "../context/useTheme";
import styles from "./ToggleButton.module.scss";

function ToggleButton({ type, show, setShow }) {
  const { theme, setTheme, lang, setLang } = useTheme();
  const handleSwitchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const handleSwitchLang = () => {
    const newLang = lang === "en" ? "fa" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };
  return (
    <div className={`${styles.switch} ${styles[theme]}`}>
      {type === "lang" ? (
        <button onClick={() => handleSwitchLang()}>
          {lang === "en" ? "FA" : "EN"}
        </button>
      ) : type === "menu" ? (
        <button
          onClick={() => setShow((show) => !show)}
          className={styles.menuButton}
        >
          <i className="fas fa-bars"></i>
        </button>
      ) : type === "close" ? (
        <button
          onClick={() => setShow((show) => !show)}
          className={styles.menuButton}
        >
          <i className="fa fa-angle-right"></i>
        </button>
      ) : (
        <button onClick={() => handleSwitchTheme()}>
          {theme === "light" ? (
            <i className={`fa-solid fa-moon`}></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </button>
      )}
    </div>
  );
}

export default ToggleButton;
