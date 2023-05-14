//React
import { useState } from "react";

//styles
import styles from "./Card.module.scss";

export const Card = ({ title, price, imgUrl, onPlus,id, onFavorite,favorited }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favorited);

  const onClickPlus = () => {
    onPlus(title, price, imgUrl);
    setIsAdded(!isAdded);
  };

  const onClickFavourite = () => {
    onFavorite(title, price, imgUrl,id);
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavourite}>
        <img
          src={
            isFavourite ? "/assets/heart-liked.svg" : "/assets/heart-unlike.svg"
          }
          alt="unliked"
        />
      </div>

      <img width={133} height={112} src={imgUrl} alt="sneaker-1" />

      <h5>{title}</h5>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span> Цена:</span>
          <b>{price} грн.</b>
        </div>

        <img
          onClick={onClickPlus}
          className={styles.plus}
          src={isAdded ? "/assets/btn-checked.svg" : "/assets/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
};
