import SkillItem from "../components/SkillItem";
import { useTheme } from "../context/useTheme";
import styles from "./Skills.module.scss";

const data = [
  "JavaScript",
  "React",
  "Redux",
  "REST API",
  "Git",
  "HTML",
  "CSS",
  "Context API",
  "Tailwind CSS",
];

const title = { en: "Skills", fa: "مهارت ها" };

function Skills() {
  const { theme, lang } = useTheme();
  return (
    <>
      <div className={`${styles.title} ${styles[theme]} ${styles[lang]}`}>
        {title[lang]}
      </div>
      <div className={styles.skills}>
        {data.map((skill) => (
          <SkillItem skill={skill} key={skill} />
        ))}
      </div>
    </>
  );
}

export default Skills;
