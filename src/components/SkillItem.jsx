/* eslint-disable react/prop-types */
import styles from "./SkillItem.module.scss";
import { useTheme } from "../context/useTheme";

function SkillItem({ skill }) {
  const { theme } = useTheme();
  return <div className={`${styles.skillItem} ${styles[theme]}`}>{skill}</div>;
}

export default SkillItem;
