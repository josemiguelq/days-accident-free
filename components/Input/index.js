import styles from "./Input.module.css";

function Input({ id, label, ...rest }) {
  return (
    <div className={styles.group}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} id={id} {...rest} />
    </div>
  );
}

export default Input;
