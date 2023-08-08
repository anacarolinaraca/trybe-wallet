import { useSelector } from 'react-redux';
import { Combine, GlobalUser, GlobalWallet } from '../types';

function Header() {
  const globalState = useSelector((stateUser: Combine):GlobalUser => stateUser.user);

  const globalWallet = useSelector((ReducersCombine: Combine)
  : GlobalWallet => ReducersCombine.wallet);

  const totalExpenses = globalWallet.expenses.reduce((total, expense) => {
    const exchangeRate = Number(expense.exchangeRates[expense.currency].ask);
    return total + Number(expense.value) * exchangeRate;
  }, 0);

  return (
    <header>
      <p data-testid="email-field">
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
