import { useDispatch, useSelector } from 'react-redux';
import { ExpensesType, RootCombine } from '../types';
import '../svg/edit.svg';
import { deleteExpense } from '../redux/actions';
import style from '../styles/Table.module.css';

function Table() {
  const { expenses } = useSelector((state: RootCombine) => state.wallet);
  const dispatch = useDispatch();
  return (
    <table className={ style.containerTable }>
      <thead>
        <tr className={ style.containerTableTitle }>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense: ExpensesType) => (
          <tr className={ style.containerTableExpenses } key={ expense.id }>
            <td>
              { expense.description }
            </td>
            <td>
              { expense.tag }
            </td>
            <td>
              { expense.method }
            </td>
            <td>
              { Number(expense.value).toFixed(2) }
            </td>
            <td>
              { expense.exchangeRates[expense.currency].name }
            </td>
            <td>
              { Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }
            </td>
            <td>
              { (Number(expense.exchangeRates[expense.currency].ask)
              * Number(expense.value)).toFixed(2) }
            </td>
            <td>
              Real
            </td>
            <td>
              <img
                src="../src/svg/edit.svg"
                alt="Editar"
              />
              {' '}
              |
              {' '}
              <button
                className={ style.containerTableButton }
                data-testid="delete-btn"
                onClick={ () => dispatch(deleteExpense(expense.id)) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
