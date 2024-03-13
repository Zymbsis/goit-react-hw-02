import './App.css';
import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

const savedRating = JSON.parse(window.localStorage.getItem('saved-rating'));
const initialState = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [clicks, setClicks] = useState(() => {
    return savedRating ? savedRating : initialState;
  });

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positive =
    Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100) + '%';

  useEffect(() => {
    window.localStorage.setItem('saved-rating', JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') return setClicks(initialState);
    setClicks(prev => {
      return { ...prev, [feedbackType]: prev[feedbackType] + 1 };
    });
  };

  return (
    <div className="container">
      <Description />
      <Options total={totalFeedback} handleClick={updateFeedback} />
      {totalFeedback ? (
        <Feedback clicks={clicks} total={totalFeedback} positive={positive} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
