import PropTypes from 'prop-types';

import style from './Statistics.module.css';

export function Statistics(props) {
  const { stats } = props;
  return (
    <section className={style.card}>
      <div className={style.cardFront}></div>
      <div className={style.cardBack}>
        <h2>Upload stats</h2>
        <div className={style.socialIcons}>
          <ul className={style.statList}>
            {stats.map(({ percentage, label, id }) => {
              return (
                <li key={id} className={style.item}>
                  <span className={style.label}> {label}</span>
                  <span className={style.percentage}>{percentage}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
