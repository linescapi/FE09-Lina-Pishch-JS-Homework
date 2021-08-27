import styles from "../Button.module.css";

export const Button = ({ color, onClick, icon }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
      {icon}
    </button>
  );
};
