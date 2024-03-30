/* eslint-disable react/prop-types */
import styles from "./SkillItem.module.scss";

function SkillItem({ skill }) {
  return <div className={styles.skillItem}>{skill}</div>;
}

export default SkillItem;
