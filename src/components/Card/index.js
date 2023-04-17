import styles from "./Card.module.scss";

export const Card = ({ title, price, imgUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/assets/heart-unlike.svg" alt="unliked" />
      </div>

      <img width={133} height={112} src={imgUrl} alt="sneaker-1" />

      <h5>{title}</h5>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span> Цена:</span>
          <b>{price} грн.</b>
        </div>

        <button className={styles.button}>
          <img width={11} height={11} src="/assets/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};
