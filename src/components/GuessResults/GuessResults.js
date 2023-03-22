import React from "react";

function GuessResults({ guesses, handleSubmitGuess }) {
  return (
    <div className="guess-results">
      {guesses.map((item, i) => {
        return (
          <p className="guess" key={i}>
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
