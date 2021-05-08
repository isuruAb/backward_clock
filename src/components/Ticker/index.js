import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Ticker = ({ value }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{value}</h1>
    </div>
  );
};

Ticker.propTypes = {
  value: PropTypes.number,
};

export default memo(Ticker);
