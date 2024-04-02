import { useTheme } from "../context/useTheme";
import styles from "./Footer.module.scss";

function Footer() {
  const { theme } = useTheme();
  return (
    <div className={`${styles.footer} ${styles[theme]}`}>
      <p>Designed by me :) @2024</p>
    </div>
  );
}

export default Footer;
