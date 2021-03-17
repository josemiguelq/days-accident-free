import styles from "./Banner.module.css";

export default function Banner({ days }) {
  const numbers = String(days).split("");

  return (
    <div>
      <div className={styles.www}>
        {numbers.map((number, index) => (
          <div key={index} className={styles.placa}>
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}
