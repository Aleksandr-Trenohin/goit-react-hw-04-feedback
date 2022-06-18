import { PropTypes } from 'prop-types';
import s from './Statistics.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={s.stat}>
        <li className={s.statItem}>Good: {good}</li>
        <li className={s.statItem}>Neutral: {neutral}</li>
        <li className={s.statItem}>Bad: {bad}</li>
        <li className={s.statItem}>Total: {total}</li>
        <li className={s.statItem}>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistic.propTypes = {
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistic;
