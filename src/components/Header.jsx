import { useState } from "react";
import { useTheme } from "../context/useTheme";
import styles from "./Header.module.scss";
import Navbar from "./Navbar";
import ToggleButton from "./ToggleButton";
import Menu from "./Menu";

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
  const [show, setShow] = useState(false);

  const { theme, lang } = useTheme();

  return (
    <>
      <div className={`${styles.header} ${styles[theme]}`}>
        {/* <div className={styles.menuContainer}>
        <div
          onClick={() => setShow((show) => !show)}
          className={styles.menuBack}
        ></div>
        <Menu show={show} setShow={setShow} />
      </div> */}
        <Menu show={show} setShow={setShow} />
        <div className={styles.toggleMenuContainer}>
          <ToggleButton type="menu" show={show} setShow={setShow} />
        </div>
        <div className={styles.switchContainer}>
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
        <div className={styles.navbarContainer}>
          <Navbar setShow={setShow} />
        </div>
        <hr />
      </div>
    </>
  );
}

export default Header;
