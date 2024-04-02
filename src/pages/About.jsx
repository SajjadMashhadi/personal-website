import { useTheme } from "../context/useTheme";
import styles from "./About.module.scss";
import ListItem from "../components/ListItem";

const data = [
  {
    name: "graduation-cap",
    text: "Kharazmi university",
    link: "https://khu.ac.ir/en",
    label: {
      en: "Learnt computer engineering at:",
      fa: "مهندسی کامپیوتر از:",
    },
  },
  {
    name: "code",
    text: "Nahira",
    link: "https://nahira.ir",
    label: {
      en: "worked as ReactJS developer for a year at:",
      fa: "یک سال سابقه کار در:",
    },
  },
];

const title = { en: "My Background", fa: "سابقه" };

function About() {
  const { theme, lang } = useTheme();
  return (
    <>
      <div className={`${styles.title} ${styles[theme]} ${styles[lang]}`}>
        {title[lang]}
      </div>
      <div className={`${styles.about} ${styles[theme]} ${styles[lang]}`}>
        {data.map((item) => (
          <div
            key={item.name}
            className={`${styles.aboutItem} ${lang === "fa" ? "rtl" : "ltr"}`}
          >
            <div className={styles.label}>{item.label[lang]}</div>
            <ListItem item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
