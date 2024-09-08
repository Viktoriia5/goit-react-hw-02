import React from "react";
import css from "./Options.module.css";

function Options({ updateFeedback, resetFeedback, showFeedback }) {
  console.log(showFeedback);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          updateFeedback("good");
        }}
        // onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {showFeedback && (
        <button type="button" onClick={() => resetFeedback()}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
