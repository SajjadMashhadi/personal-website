import { useTheme } from "../context/useTheme";
import styles from "./Header.module.scss";
import Navbar from "./Navbar";
import ToggleButton from "./ToggleButton";

const info = {
  en: {
    name: "Sajjad Mashhadi",
    sentence: "Hi. I'm a frontend developer. welcome to my page.",
  },
  fa: {
    name: "سجاد مشهدی",
    sentence: "سلام. من توسعه دهنده فرانت هستم. به صفحه من خوش آمدید",
  },
};

function Header() {
  const { theme, lang } = useTheme();
  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.switchContainer}>
        <ToggleButton type="menu" />
        <ToggleButton type="theme" />
        <ToggleButton type="lang" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img alt="profile picture" src="/public/profile-picture-2.jpg" />
        </div>
        <div className={styles.name}>{info[lang].name}</div>
        <div className={styles.sentence}>{info[lang].sentence}</div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
