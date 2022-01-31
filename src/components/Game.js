import React, { useState, useEffect } from "react";

import logo_1 from "../img/logo_1.png";
import logo_2 from "../img/logo_2.png";
import logo_3 from "../img/logo_3.png";
import logo_4 from "../img/logo_4.png";
import logo_5 from "../img/logo_5.png";
import SingleCard from "./SingleCard";

function Game() {
  const [card, setCard] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const imageArry = [
    { src: logo_1, matched: false },
    { src: logo_2, matched: false },
    { src: logo_3, matched: false },
    { src: logo_4, matched: false },
    { src: logo_5, matched: false },
  ];

  const shuffleCards = () => {
    const shuffleCardsArr = [...imageArry, ...imageArry]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiseOne(null);
    setChoiseTwo(null);
    setCard(shuffleCardsArr);
    setTurn(0);
  };

  const handleChoise = (card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  };
  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisabled(true);
      if (choiseOne.src === choiseTwo.src) {
        setCard((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiseOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        console.log("the cards  are match");
        resetTurn();
      } else {
        console.log("Not Match");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiseOne, choiseTwo]);

  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurn((prvTurn) => prvTurn + 1);
    setDisabled(false);
  };
  useEffect(() => {
    shuffleCards();
  }, []);

  const gridImage = card.map((card) => (
    <SingleCard
      card={card}
      key={card.id}
      handleChoise={handleChoise}
      flipped={card === choiseOne || card === choiseTwo || card.matched}
      disabled={disabled}
    />
  ));
  console.log(card, turn);
  return (
    <div>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards} className="btn">
        New Game
      </button>
      <div className="cards-grid">{gridImage}</div>
      <p>Turns: {turn} </p>
    </div>
  );
}

export default Game;
