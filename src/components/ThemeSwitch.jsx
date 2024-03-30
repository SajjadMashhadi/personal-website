import { useTheme } from "../context/useTheme";
import styles from "./ThemeSwitch.module.scss";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const handleSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className={`${styles.switch} ${styles[theme]}`}>
      <button onClick={() => handleSwitch()}>
        {theme === "light" ? (
          <i className={`fa-solid fa-moon`}></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </button>
    </div>
  );
}

export default ThemeSwitch;
