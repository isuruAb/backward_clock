import Ticker from "../Ticker";
import styles from "./index.module.scss";

const Time = ({ hours, mins, seconds }) => {
  return (
    <div className={styles.wrapper}>
      <Ticker value={hours} label="hours" />
      <Ticker value={mins} label="minutes" />
      <Ticker value={seconds} label="seconds" />
    </div>
  );
};

export default Time;
