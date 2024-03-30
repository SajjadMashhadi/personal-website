/* eslint-disable react/prop-types */
import { useTheme } from "../context/useTheme";
import styles from "./ListItem.module.scss";

function ListItem({ item }) {
  const { theme } = useTheme();

  return (
    <li className={`${styles.listItem} ${styles[theme]}`} key={item.name}>
      <a target="_blank" href={item.link}>
        <span className={styles.iconContainer}>
          <i className={`fa fa-${item.name}  icon-3d`}></i>
        </span>
        <span className={styles.linkText}>{item.text}</span>
      </a>
    </li>
  );
}

export default ListItem;
