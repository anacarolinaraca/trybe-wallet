# Trybewallet

## Sobre
O projeto Trybewallet é uma aplicação de controle de gastos com conversor de moedas. A aplicação permite que os usuários adicionem, removam e editem despesas, visualizem uma tabela de gastos e o total de gastos convertidos para uma moeda de sua escolha.

## Tecnologias Utilizadas
- [React](https://pt-br.legacy.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Funcionalidades

### Página de Login

- Na página inicial de login permite os usuários a logar com e-mail e senha.
- Os inputs estão validados no formato de e-mail e senha.
- O botão de "Entrar" só fica habilitado se o e-mail e a senha estiverem no formato correto.
- Após o login, a rota muda para "/carteira".

### Página da Carteira

- No header exibe o e-mail da pessoa usuária e o total de gastos em reais.
- Permite o usuário adicionar gastos com valor, descrição, moeda, método de pagamento e categoria.
- Os valores das despesas são convertidos para a moeda selecionada.
- É exibida uma tabela de despesas com opções de excluir cada despesa.

### Exclusão de Despesas
- Permite excluir uma despesa existente.
- Mantém a ordem das despesas na tabela após a exclusão.

## Como Usar
1. Clone o repositório:

```text
git clone git@github.com:anacarolinaraca/trybe-wallet.git
```
2. Entre na pasta do projeto:

```text
cd trybe-wallet
```
3. Instale as dependências do projeto:

```text
npm install
```
4. Rode a aplicação utilizando:

```text
npm run dev
``` 
5. Rode os testes de cobertura:

```text
npm run coverage
``` 
