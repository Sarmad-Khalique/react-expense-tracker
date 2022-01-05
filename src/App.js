import AccountSummary from "./components/AccountSummary";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import { TransactionProvider } from "./context/TransactionContext";

const App = () => {
  return (
    <div className="w-screen bg-stone-100 h-screen flex justify-center">
      <div className="container">
        <TransactionProvider>
          <Header />
          <Balance />
          <AccountSummary />
          <TransactionList />
          <AddTransaction />
        </TransactionProvider>
      </div>
    </div >
  );
}

export default App;
