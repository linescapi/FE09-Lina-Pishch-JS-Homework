import styles from "../Button.module.css";

export const Button = ({ color, onClick, inner }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
      {inner}
    </button>
  );
};
