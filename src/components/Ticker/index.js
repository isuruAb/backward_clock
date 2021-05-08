import { memo } from "react";
import styles from "./index.module.scss";

const Ticker = ({ value }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{value}</h1>
    </div>
  );
};

export default memo(Ticker);
