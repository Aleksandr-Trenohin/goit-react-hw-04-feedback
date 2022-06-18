import { Component } from 'react';
import { PropTypes } from 'prop-types';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  onLeaveFeedback = evt => {
    const { title } = evt.target;

    this.setState(prevState => ({
      [title]: prevState[title] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positiveFeedback = (good / this.countTotalFeedback()) * 100;

    return positiveFeedback ? positiveFeedback.toFixed(0) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistic">
          {total > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
