import React from "react";
import backCard from "../img/back_card copy.png";

const SingleCard = ({ card, handleChoise, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoise(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="fornt" src={card.src} alt="front-card" />
        <img
          className="back"
          src={backCard}
          onClick={handleClick}
          alt="back-card"
        />
      </div>
    </div>
  );
};

export default SingleCard;
