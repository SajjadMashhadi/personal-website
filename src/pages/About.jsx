import { useTheme } from "../context/useTheme";
import styles from "./About.module.scss";
import ListItem from "../components/ListItem";

const data = [
  {
    name: "graduation-cap",
    text: "Kharazmi university",
    link: "https://khu.ac.ir/en",
    label: "Learnt computer engineering at:",
  },
  {
    name: "code",
    text: "Nahira",
    link: "https://nahira.ir",
    label: "worked as ReactJS developer at:",
  },
];

function About() {
  const { theme } = useTheme();
  return (
    <div className={`${styles.about} ${styles[theme]}`}>
      {data.map((item) => (
        <div key={item.name} className={styles.aboutItem}>
          <div className={styles.label}>{item.label}</div>
          <ListItem item={item} />
        </div>
      ))}
    </div>
  );
}

export default About;
