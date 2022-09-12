import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './TransactionHistory.module.css';

export function TransactionHistory(props) {
  const { items } = props;
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.titel}>
          <th className={style.typeTitel}>TYPE</th>
          <th className={style.amountTitel}>AMOUNT</th>
          <th className={style.currencyTitel}>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, i) => {
          return i ? (
            <tr key={id} className={style.tbodyTr}>
              <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ) : (
            <tr key={id} className={classNames(style.tbodyTr)}>
              <td className={style.first}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </td>
              <td className={style.first}>{amount}</td>
              <td className={style.first}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
