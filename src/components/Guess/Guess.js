import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../../src/game-helpers";

function Guess({ value, answer }) {
  // console.log(value);
  let isInWord = "cell";
  let arrayOfStatuses = [];

  if (value) {
    let checkedGuess = checkGuess(value, answer);

    checkedGuess.map(function (letter) {
      if (letter.status === "correct") {
        arrayOfStatuses.push("cell correct");
      }
      if (letter.status === "misplaced") {
        arrayOfStatuses.push("cell misplaced");
      }

      if (letter.status === "incorrect") {
        arrayOfStatuses.push("cell incorrect");
      }
    });
  } else {
    arrayOfStatuses.push("cell");
    arrayOfStatuses.push("cell");
    arrayOfStatuses.push("cell");
    arrayOfStatuses.push("cell");
    arrayOfStatuses.push("cell");
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span className={arrayOfStatuses[num]} key={num}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
