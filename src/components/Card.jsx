import React from 'react';
import '../styles/Card.css';

const Card = ({ image, title, description, price, selected, onClick }) => {
  return (
    <div
      className={`card ${selected ? "selected" : ""}`} // add selected class
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <div className="card__shine" />
      <div className="card__glow" />
      <div className="card__content">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="card__image"
        />
        <div className="card__text">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
        </div>
        <div className="card__footer">
          <div className="card__price">{price}</div>
          <div className="card__button">
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
