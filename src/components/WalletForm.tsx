import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrencies } from '../services/api';
import { GlobalWallet } from '../types';
import { addCurrencies, addExpenses } from '../redux/actions';

function WalletForm() {
  const [currencies, setCurrencies] = useState<GlobalWallet[]>([]);
  const [expenses, setExpenses] = useState({
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  });

  const dispatch = useDispatch();

  const [exchangeRates, setExchangeRates] = useState({});

  const formataExchangeRares = (listExchange: any) => {
    const objExchange = {} as any;

    Object.entries(listExchange).forEach((key: any) => {
      const value = key[1];
      objExchange[key[0]] = value;
    });

    return objExchange;
  };

  useEffect(() => {
    const getCurrencies = async () => {
      const resultCurrencies = await fetchCurrencies();
      delete resultCurrencies.USDT;
      setCurrencies(resultCurrencies);

      const currenciesList = Object.keys(resultCurrencies);

      const formatedExchangeRates = formataExchangeRares(resultCurrencies);
      setExchangeRates(formatedExchangeRates);

      dispatch(addCurrencies({ currencies: currenciesList } as GlobalWallet));
    };
    getCurrencies();
  }, [dispatch]);

  const setExpensesStore = async (event:
  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    await fetchCurrencies();

    const exchangeRatesList = { ...expenses, exchangeRates };
    setExpenses(exchangeRatesList);

    dispatch(addExpenses({ expenses: exchangeRatesList } as unknown as GlobalWallet));

    setExpenses({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates,
    });
  };

  return (
    <form>
      <label htmlFor="input-value">
        Valor da Despesa:
      </label>
      <input
        type="text"
        name="value"
        id="input-value"
        data-testid="value-input"
        onChange={ (event) => {
          setExpenses({ ...expenses, value: event.target.value });
        } }
        value={ expenses.value }
      />

      <label htmlFor="input-description">
        Descrição da Despesa:
      </label>
      <input
        type="text"
        name="description"
        id="input-description"
        data-testid="description-input"
        onChange={ (event) => {
          setExpenses({ ...expenses, description: event.target.value });
        } }
        value={ expenses.description }

      />

      <label htmlFor="select-currency">
        Seleciona a Moeda:
      </label>
      <select
        name="currency"
        id="select-currency"
        data-testid="currency-input"
        onChange={ (event) => {
          setExpenses({ ...expenses, currency: event.target.value });
        } }
        value={ expenses.currency }

      >
        {
        Object.keys(currencies).map((currency) => (
          <option
            key={ currency }
            value={ currency }
          >
            { currency }
          </option>
        ))
        }
      </select>

      <label htmlFor="select-method">
        Método de Pagamento:
      </label>
      <select
        name="method"
        id="select-method"
        data-testid="method-input"
        onChange={ (event) => {
          setExpenses({ ...expenses, method: event.target.value });
        } }
        value={ expenses.method }
      >
        {/* <option value="">{null}</option> */}

        <option value="Dinheiro">
          Dinheiro
        </option>
        <option value="Cartão de crédito">
          Cartão de crédito
        </option>
        <option value="Cartão de débito">
          Cartão de débito
        </option>
      </select>

      <label htmlFor="select-tag">
        Categoria:
      </label>
      <select
        name="tag"
        id="select-tag"
        data-testid="tag-input"
        onChange={ (event) => {
          setExpenses({ ...expenses, tag: event.target.value });
        } }
        value={ expenses.tag }
      >
        {/* <option value="">{null}</option> */}
        <option value="Alimentação">
          Alimentação
        </option>
        <option value="Lazer">
          Lazer
        </option>
        <option value="Trabalho">
          Trabalho
        </option>
        <option value="Transporte">
          Transporte
        </option>
        <option value="Saúde">
          Saúde
        </option>
      </select>
      <button type="submit" onClick={ (event) => setExpensesStore(event) }>
        Adicionar despesa
      </button>
    </form>
  );
}

export default WalletForm;
