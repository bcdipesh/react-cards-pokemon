import React from "react";
import useFlip from "./hooks";
import backOfCard from "./back.png";
import "./PlayingCard.css";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, setIsFlipped] = useFlip();

  return (
    <img
      src={isFlipped ? front : back}
      alt="playing card"
      onClick={setIsFlipped}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
