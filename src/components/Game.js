import React from "react";
import backCard from "../img/back_card copy.png";
import logo_1 from "../img/logo_1.png";

function Game() {
  return (
    <div>
      <div className="grid">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img className="card" src={backCard} alt="" />
            </div>
            <div class="flip-box-back">
              <img className="card" src={logo_1} alt="" />
            </div>
          </div>
        </div>

        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img className="card" src={backCard} alt="" />
            </div>
            <div class="flip-box-back">
              <img className="card" src={logo_1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
