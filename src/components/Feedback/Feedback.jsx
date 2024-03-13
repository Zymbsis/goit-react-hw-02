import css from './Feedback.module.css';

const Feedback = ({ clicks, total, positive }) => {
  return (
    <div className={css.optionsWrapper}>
      <span>Good: {clicks.good}</span>
      <span>Neutral: {clicks.neutral}</span>
      <span>Bad: {clicks.bad}</span>
      <span>Total: {total}</span>
      <span>Positive: {positive}</span>
    </div>
  );
};
export default Feedback;
