import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ image, title, description, price, selected, onClick }) => {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ""}`} // add selected class
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <div className={styles.card__shine} />
      <div className={styles.card__glow} />
      <div className={styles.card__content}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={styles.card__image}
        />
        <div className={styles.card__text}>
          <p className={styles.card__title}>{title}</p>
          <p className={styles.card__description}>{description}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.card__price}>{price}</div>
          <div className={styles.card__button}>
            <svg height={16} width={16} viewBox="0 0 24 24">
              <path
                strokeWidth={2}
                stroke="currentColor"
                d="M4 12H20M12 4V20"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
