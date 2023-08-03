import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function Login() {
  const [passwordValidation, setPasswordValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');
  // const navigation = useNavigate();

  const validateSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPasswordValidation(event.target.value);
    // setEmailValidation(event.target.value);
  };

  const validateSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmailValidation(event.target.value);
  };

  const validateEmail = () => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    return regexEmail.test(emailValidation);
  };
  const disabledButton = () => {
    return passwordValidation.length < 6 || validateEmail();
  };

  // const validateForms = () => {
  //   return disabledButton() || validateEmail();
  // };

  return (
    <form>
      <label htmlFor="input-email">
        <input
          type="email"
          name="email"
          id="input-email"
          data-testid="email-input"
          onChange={ validateSetEmail }
        />
      </label>
      <label htmlFor="input-password">
        <input
          type="password"
          name=""
          id="input-password"
          data-testid="password-input"
          minLength={ 6 }
          onChange={ validateSetPassword }
        />
      </label>
      <button type="submit" disabled={ disabledButton() }>Entrar</button>
    </form>
  );
}

export default Login;
