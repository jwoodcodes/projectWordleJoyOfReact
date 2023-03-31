import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numOfGuesses}</strong>.
        </p>
      </div>
      ;
    </Banner>
  );
}

export default WonBanner;
