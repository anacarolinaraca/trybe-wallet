import { useSelector } from 'react-redux';
import { RootCombine, GlobalUser, GlobalWallet } from '../types';
import style from '../styles/Header.module.css';

function Header() {
  const globalState = useSelector((stateUser: RootCombine):GlobalUser => stateUser.user);

  const globalWallet = useSelector((rootReducer: RootCombine)
  : GlobalWallet => rootReducer.wallet);

  const totalExpenses = (globalWallet.expenses.length > 0)
    ? globalWallet.expenses.reduce((total, expense) => {
      const exchangeRate = Number(expense.exchangeRates[expense.currency].ask);
      return total + Number(expense.value) * exchangeRate;
    }, 0)
    : 0;

  return (
    <header className={ style.containerHeader }>
      <p className={ style.textEmail } data-testid="email-field">
        Email:
        {' '}
        {globalState.email}
      </p>
      <p data-testid="total-field">
        {totalExpenses.toFixed(2)}
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </header>
  );
}

export default Header;
