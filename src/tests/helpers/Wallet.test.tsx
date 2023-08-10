import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import Wallet from '../../pages/Wallet';
import { LOGIN_EMAIL, setEmailAction } from '../../redux/actions';

import { store } from '../../redux';

describe('Testes no Wallet', () => {
  renderWithRouterAndRedux(<Wallet />);

  const inputValue = screen.getByTestId('value-input');
  const inputDescription = screen.getByTestId('description-input');
  const inputCurrency = screen.getByTestId('currency-input');
  const inputMethod = screen.getByTestId('method-input');
  const inputTag = screen.getByTestId('tag-input');
  const buttonAddExpense = screen.getByRole('button', {
    name: /adicionar despesa/i,
  });

  const valueExpense = {
    value: '10',
    description: 'Mc Donalds',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  test('Verifique se a despesa foi adicionada', async () => {
    await userEvent.type(inputValue, valueExpense.value);
    await userEvent.type(inputDescription, valueExpense.description);
    await userEvent.type(inputCurrency, valueExpense.currency);
    await userEvent.type(inputMethod, valueExpense.method);
    await userEvent.type(inputTag, valueExpense.tag);

    await userEvent.click(buttonAddExpense);
    await waitFor(() => { expect(store.getState().wallet).not.toBeUndefined(); });

    await waitFor(() => { expect(store.getState().user.email).not.toBeUndefined(); });
    expect(valueExpense.value).toBe('10');
    expect(valueExpense.description).toBe('Mc Donalds');
    expect(valueExpense.currency).toBe('USD');
    expect(valueExpense.method).toBe('Dinheiro');
    expect(valueExpense.tag).toBe('Alimentação');
  });
  test('Verifique se a action altera os dados do usuário', () => {
    const SET_EMAIL = {
      type: LOGIN_EMAIL,
      payload: 'alguem@alguem.com',
    };

    const action = setEmailAction('alguem@alguem.com');
    store.dispatch(action);
    expect(action).toEqual(SET_EMAIL);
  });
});
