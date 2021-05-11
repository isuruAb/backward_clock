import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h2>
        Backward <span>Clock</span>
      </h2>
    </div>
  );
};

export default Header;
