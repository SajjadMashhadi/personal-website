import SkillItem from "../components/SkillItem";
import styles from "./Skills.module.scss";

const data = ["JavaScript", "React", "Redux", "REST API", "Git", "HTML", "CSS"];

function Skills() {
  return (
    <>
      <div className={styles.skills}>
        {data.map((skill) => (
          <SkillItem skill={skill} key={skill} />
        ))}
      </div>
    </>
  );
}

export default Skills;
