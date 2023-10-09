import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import style from '../styles/Wallet.module.css';

function Wallet() {
  return (
    <div className={ style.containerComponents }>
      <Header />
      <WalletForm />
      <Table />
    </div>
  );
}

export default Wallet;
