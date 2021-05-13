import { memo } from "react";
import styles from "./index.module.scss";

interface IProps {
  value: string;
  label: string;
}

const Ticker: React.FC<IProps> = ({ value, label }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{value}</h1>
      <p>{label}</p>
    </div>
  );
};

export default memo(Ticker);
