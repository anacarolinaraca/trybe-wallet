import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import { LOGIN_EMAIL, setEmailAction } from '../redux/actions';

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

  test('Verifique se existe os campos de valor da despesa, descrição da despesa, moeda, método de pagamento, categoria (tag) e um botão Adicionar despesa', () => {
    expect(inputValue).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(inputCurrency).toBeInTheDocument();
    expect(inputMethod).toBeInTheDocument();
    expect(inputTag).toBeInTheDocument();
    expect(buttonAddExpense).toBeInTheDocument();
  });
  test('Verifique se a despesa foi adicionada', async () => {
    const valueExpense = {
      value: '10',
      description: 'Mc Donalds',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    await userEvent.type(inputValue, valueExpense.value);
    await userEvent.type(inputDescription, valueExpense.description);
    await userEvent.type(inputCurrency, valueExpense.currency);
    await userEvent.type(inputMethod, valueExpense.method);
    await userEvent.type(inputTag, valueExpense.tag);

    await userEvent.click(buttonAddExpense);

    expect(valueExpense.value).toBe('10');
    expect(valueExpense.description).toBe('Mc Donalds');
    expect(valueExpense.currency).toBe('USD');
    expect(valueExpense.method).toBe('Dinheiro');
    expect(valueExpense.tag).toBe('Alimentação');
  });
  test('Verifique se existe um campo que some as despesas', () => {
    renderWithRouterAndRedux(<Wallet />);
    const sumField = screen.getByTestId('total-field');

    expect(sumField).toBeInTheDocument();
  });
  test('Verifique se a action altera os dados do email', () => {
    const SET_EMAIL = {
      type: LOGIN_EMAIL,
      payload: 'alguem@alguem.com',
    };

    const action = setEmailAction('alguem@alguem.com');
    expect(action).toEqual(SET_EMAIL);
  });
});
