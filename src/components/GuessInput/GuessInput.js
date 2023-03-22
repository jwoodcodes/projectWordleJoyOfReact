import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const submitGuess = function (e) {
    setTentativeGuess(e.target.value.toUpperCase());
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmitGuess(tentativeGuess);
        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        title="5 Letter Word"
        onChange={submitGuess}
      />
    </form>
  );
}

export default GuessInput;
