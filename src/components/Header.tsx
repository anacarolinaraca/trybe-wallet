import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Header() {
  const globalState = useSelector((state: GlobalState) => state);
  return (
    <div>
      <p data-testid="email-field">
        Email:
        {' '}
        {globalState.user.email}
      </p>
      <p data-testid="total-field">
        Despesas:
        0
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </div>
  );
}

export default Header;
