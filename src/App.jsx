import { useEffect, useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  // const [review, setReview] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const [review, setReview] = useState(() => {
    return {
      good: parseInt(window.localStorage.getItem("good") ?? 0),
      neutral: parseInt(window.localStorage.getItem("neutral") ?? 0),
      bad: parseInt(window.localStorage.getItem("bad") ?? 0),
    };
  });

  console.log(review);
  console.log();
  const [showFeedback, sedtShowFeedback] = useState(false);

  const updateFeedback = (feedbackType) => {
    console.log("click", review.good);
    setReview({ ...review, [feedbackType]: review[feedbackType] + 1 });
    sedtShowFeedback(true);
  };

  const resetFeedback = () => {
    setReview({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    sedtShowFeedback(false);
  };

  const totalFeedback = review.good + review.neutral + review.bad;
  let positive = Math.round((review.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("good", review.good);
    localStorage.setItem("neutral", review.neutral);
    localStorage.setItem("bad", review.bad);
    localStorage.setItem("total", totalFeedback);
    localStorage.setItem("positive", positive);
  }, [review.good, review.neutral, review.bad, totalFeedback, positive]);

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        showFeedback={showFeedback}
      />
      {!showFeedback && <Notification />}

      {showFeedback && (
        <Feedback
          good={review.good}
          neutral={review.neutral}
          bad={review.bad}
          total={totalFeedback}
          positive={positive}
        />
      )}
    </>
  );
}

export default App;
