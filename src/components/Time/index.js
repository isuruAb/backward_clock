import Ticker from "../Ticker";
import styles from "./index.module.scss";

const Time = () => {
  return (
    <div className={styles.wrapper}>
      <Ticker value={24}/>
      <Ticker value={60}/>
      <Ticker value={60}/>
    </div>
  );
};

export default Time;
