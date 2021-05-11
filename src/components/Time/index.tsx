import Ticker from "../Ticker";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

interface IProps {
  hours: string;
  mins: string;
  seconds: string;
}

const Time: React.FC<IProps> = ({ hours, mins, seconds }) => {
  return (
    <div className={styles.wrapper}>
      <Ticker value={hours} label="HOURS" />
      <Ticker value={mins} label="MINUTES" />
      <Ticker value={seconds} label="SECONDS" />
    </div>
  );
};

export default Time;