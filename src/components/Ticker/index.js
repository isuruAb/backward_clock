import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Ticker = ({ value, label }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{value}</h1>
      <p>{label}</p>
    </div>
  );
};

Ticker.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
};

export default memo(Ticker);
