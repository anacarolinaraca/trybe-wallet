import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmailAction } from '../redux/actions';
import style from '../styles/Login.module.css';

function Login() {
  const [passwordValidation, setPasswordValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(emailValidation);
  };
  const disabledButton = () => {
    setDisabled(passwordValidation.length < 6 || !validateEmail());
  };

  useEffect(() => {
    disabledButton();
  });

  const validateSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPasswordValidation(event.target.value);
    disabledButton();
  };

  const validateSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmailValidation(event.target.value);
    disabledButton();
  };

  const validateForms = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setEmailAction(emailValidation));
    navigation('/carteira');
  };

  return (
    <div className={ style.containerElements }>
      <h1 className={ style.titleTrybeWallet }>
        Trybe Wallet
      </h1>
      <form className={ style.containerForm } onSubmit={ validateForms }>
        <label className={ style.containerFormLabel } htmlFor="input-email">
          email
          <input
            className={ style.containerFormInput }
            type="email"
            name="email"
            id="input-email"
            data-testid="email-input"
            value={ emailValidation }
            onChange={ validateSetEmail }
          />
        </label>
        <label className={ style.containerFormLabel } htmlFor="input-password">
          senha
          <input
            className={ style.containerFormInput }
            type="password"
            name="password"
            id="input-password"
            data-testid="password-input"
            minLength={ 6 }
            value={ passwordValidation }
            onChange={ validateSetPassword }
          />
        </label>
        <button
          className={ style.containerFormButton }
          type="submit"
          disabled={ disabled }
        >
          Entrar

        </button>
      </form>
    </div>

  );
}

export default Login;
