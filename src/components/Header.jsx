import styles from "./Header.module.scss";
import Navbar from "./Navbar";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.swithContainer}>
        <ThemeSwitch />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img alt="profile picture" src="/public/profile-picture-2.jpg" />
        </div>
        <div className={styles.name}>Sajjad Mashhadi</div>
        <div className={styles.sentence}>
          Hi. I'm a frontend developer. welcome to my page.
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
