import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes no Login', () => {
  const email = 'alguem@alguem.com';
  const password = 'abc123';

  test('Verifique se existe um botão, campo de login e um campo de senha com testID', () => {
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const buttonEntrar = screen.getByRole('button', { name: /entrar/i });
    renderWithRouterAndRedux(<App />);

    expect(buttonEntrar).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  //   test('Verifique se o email é validado', () => {
  //     const verifyEmail = (email);

  //     expect(buttonEntrar).toBeInTheDocument();
  //   });

  test('Verifique se o botão está desabilitado se o email não está no formato "alguem@alguem.com" e a se senha tem menos de 6 caracteres', async () => {
    renderWithRouterAndRedux(<App />);
    const buttonEntrar = screen.getByRole('button', { name: /entrar/i });
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    expect(buttonEntrar).toBeDisabled();

    await userEvent.type(inputEmail, email);
    await userEvent.type(inputPassword, password);

    expect(buttonEntrar).not.toBeDisabled();

    await userEvent.click(buttonEntrar);
  });

  test('Verifique se a rota após clicar no botão "Entrar" é "/carteira"', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/'] });

    const buttonEntrar = screen.getByRole('button', { name: /entrar/i });
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    await userEvent.type(inputEmail, email);
    await userEvent.type(inputPassword, password);

    userEvent.click(buttonEntrar);

    await waitFor(() => {
      expect(screen.getByTestId('value-input')).toBeInTheDocument();
    });
  });
});
