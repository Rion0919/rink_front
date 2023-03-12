import React from "react";
import styles from "./topbar.module.css";

export const Topbar: React.FC = () => {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span className={styles.logo}>Rink</span>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchbar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="検索"
          />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarIconItem}>1</div>
        <div className={styles.topbarIconItem}>2</div>
      </div>
      <img src="/assets/person/myimg.png" alt="" className={styles.topbarImg} />
    </div>
  );
};
