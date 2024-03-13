import css from './Options.module.css';

const Options = ({ handleClick, total }) => {
  return (
    <ul className={css.buttonWrapper}>
      <li>
        <button onClick={() => handleClick('good')}>Good</button>
      </li>
      <li>
        <button onClick={() => handleClick('neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => handleClick('bad')}>Bad</button>
      </li>
      {total !== 0 && (
        <li>
          <button onClick={() => handleClick('reset')}>Reset</button>
        </li>
      )}
    </ul>
  );
};
export default Options;
