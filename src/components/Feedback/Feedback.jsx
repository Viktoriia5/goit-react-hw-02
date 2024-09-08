import React from "react";
import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positive }) {
  // let positive = Math.round((good / total) * 100);

  return (
    <div>
      <ul className={css.options}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </div>
  );
}

export default Feedback;
