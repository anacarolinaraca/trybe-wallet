export type GlobalUser = {
  email: string,
};

export type GlobalWallet = {
  currencies: string[],
  expenses: ExpensesType[],
  id: number,
};

export type ExpensesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: ExchangeRatesType,
};

export type ExchangeRatesType = {
  [currency: string] : {
    code: string
    name: string
    ask: string,
  }
};

export type RootCombine = {
  user: GlobalUser,
  wallet: GlobalWallet
};
