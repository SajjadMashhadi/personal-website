/* eslint-disable react/prop-types */
import styles from "./Background.module.scss";

function Background({ children }) {
  const theme = "dark";
  return (
    <div className={`${styles.background} ${styles[theme]}`}>
      <div className={styles.outerLayer}>{children}</div>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
      <span className="animation-span"></span>
    </div>
  );
}

export default Background;
