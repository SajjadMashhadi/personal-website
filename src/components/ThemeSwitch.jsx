import styles from "./ThemeSwitch.module.scss";

function ThemeSwitch() {
  return (
    <div className={styles.switchButtonContainer}>
      <button>Dark</button>
    </div>
  );
}

export default ThemeSwitch;
