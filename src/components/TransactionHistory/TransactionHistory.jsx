import PropTypes from 'prop-types';

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
   {items.map(({ id, type, amount, currency }) => {
    return (
     <tbody key={id}>
      <tr className={style.tbodyTr}>
       <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
       <td>{amount}</td>
       <td>{currency}</td>
      </tr>
     </tbody>
    );
   })}
  </table>
 );
}

TransactionHistory.propTypes = {
 id: PropTypes.string,
 type: PropTypes.string,
 amount: PropTypes.string,
 currency: PropTypes.string,
};
