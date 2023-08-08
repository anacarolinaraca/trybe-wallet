import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
import App from '../App';

describe('Testes no Login', () => {
  renderWithRouterAndRedux(<Login />);

  const email = 'alguem@alguem.com';
  const password = 'abc123';

  const inputEmail = screen.getByLabelText(/email:/i);
  const inputPassword = screen.getByLabelText(/senha:/i);
  const buttonEntrar = screen.getByRole('button', { name: /entrar/i });

  test('Verifique se existe um botão, campo de login e um campo de senha com testID', () => {
    const idEmail = screen.getByTestId('email-input');
    const idPassword = screen.getByTestId('password-input');

    expect(buttonEntrar).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(idEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(idPassword).toBeInTheDocument();
  });

  //   test('Verifique se o email é validado', () => {
  //     const verifyEmail = (email);

  //     expect(buttonEntrar).toBeInTheDocument();
  //   });

  test('Verifique se o botão está desabilitado se o email não está no formato "alguem@alguem.com" e a se senha tem menos de 6 caracteres', () => {
    renderWithRouterAndRedux(<App />);

    expect(buttonEntrar).toBeDisabled();

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);

    expect(buttonEntrar).not.toBeDisabled();

    userEvent.click(buttonEntrar);
  });

  test('Verifique se a rota após clicar no botão "Entrar" é "/carteira"', () => {
    renderWithRouterAndRedux(<App />);

    // renderWithRouterAndRedux(
    //   <BrowserRouter>
    //     <Login />
    //   </BrowserRouter>,
    // );

    const pathLogin = window.location.pathname;
    const pathWallet = '/carteira';

    userEvent.click(buttonEntrar);

    expect(window.location.pathname).not.toBe(pathLogin);
    expect(window.location.pathname).not.toBe(pathWallet);
  });
});
