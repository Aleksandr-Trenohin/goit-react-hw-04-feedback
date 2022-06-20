import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const goodIncrement = () => setGood(good + 1);
  const neutralIncrement = () => setNeutral(neutral + 1);
  const badIncrement = () => setBad(bad + 1);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = evt => {
    const { title } = evt.target;

    switch (title) {
      case 'good':
        goodIncrement();
        break;
      case 'neutral':
        neutralIncrement();
        break;
      case 'bad':
        badIncrement();
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;

    return total;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedback = (good / countTotalFeedback()) * 100;

    return positiveFeedback ? positiveFeedback.toFixed(0) : 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistic">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
