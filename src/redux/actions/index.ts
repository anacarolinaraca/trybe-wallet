import { GlobalWallet } from '../../types';

export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const CURRENCY = 'CURRENCY';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const setEmailAction = (email: string) => ({
  type: LOGIN_EMAIL,
  payload: email,
});

export const addCurrencies = ({ currencies }: GlobalWallet) => ({
  type: CURRENCY,
  payload: currencies,
});

export const addExpenses = ({ expenses }: GlobalWallet) => ({
  type: ADD_EXPENSES,
  payload: expenses,
});

export const deleteExpense = (id: number) => ({
  type: DELETE_EXPENSES,
  payload: id,
});
