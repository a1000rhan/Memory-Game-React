import React from "react";
import backCard from "../img/back_card copy.png";
import logo_1 from "../img/logo_1.png";
import logo_2 from "../img/logo_2.png";
import logo_3 from "../img/logo_3.png";

function Game() {
  const arr = [logo_1, logo_2, logo_3];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const arrMix = shuffle(arr);

  let cards = document.querySelectorAll(".card");
  const flipCard = (e) => {
    [...cards].forEach((card) => {
      card.addEventListener("click", function () {
        card.classList.toggle("is-flipped");
      });
    });
    console.log(e);
  };

  return (
    <div>
      <div className="grid">
        {/* card 1 */}
        <div className="scene scene--card">
          <div className="card" onClick={(e) => flipCard(e.target)}>
            <div className="card__face card__face--front">
              <img className="card" src={backCard} alt="backCard" key="1" />
            </div>
            <div className="card__face card__face--back">
              <img className="card" src={arrMix[0]} alt="logo" />
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="scene scene--card">
          <div className="card" onClick={flipCard}>
            <div className="card__face card__face--front">
              <img className="card" src={backCard} alt="backCard" />
            </div>
            <div className="card__face card__face--back">
              <img className="card" src={arrMix[1]} alt="logo" />
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="scene scene--card">
          <div className="card" onClick={flipCard}>
            <div className="card__face card__face--front">
              <img className="card" src={backCard} alt="backCard" />
            </div>
            <div className="card__face card__face--back">
              <img className="card" src={arrMix[1]} alt="logo" />
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className="scene scene--card">
          <div className="card" onClick={flipCard}>
            <div className="card__face card__face--front">
              <img className="card" src={backCard} alt="backCard" />
            </div>
            <div className="card__face card__face--back">
              <img className="card" src={arrMix[0]} alt="logo" />
            </div>
          </div>
        </div>
        {/* card5 */}
        <div className="scene scene--card">
          <div className="card" onClick={flipCard}>
            <div className="card__face card__face--front">
              <img className="card" src={backCard} alt="backCard" />
            </div>
            <div className="card__face card__face--back">
              <img className="card" src={arrMix[2]} alt="logo" />
            </div>
          </div>
        </div>
        {/* card6 */}
        <div className="scene scene--card">
          <div className="card" onClick={flipCard}>
            <div className="card__face card__face--front">
              <img className="card" src={backCard} alt="backCard" />
            </div>
            <div className="card__face card__face--back">
              <img className="card" src={arrMix[2]} alt="logo" />
            </div>
          </div>
        </div>
        {/* card7 */}
      </div>
    </div>
  );
}

export default Game;
