import { PropTypes } from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={s.btnList}>
        {options.map(option => (
          <li key={option} className={s.btnItem}>
            <button
              title={option}
              type="button"
              onClick={onLeaveFeedback}
              className={s.btn}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
