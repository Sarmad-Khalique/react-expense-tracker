import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
const Balance = () => {
    const { transactions } = useContext(TransactionContext);
  const transactionAmounts = transactions.map(
    (transaction) => transaction.Amount
  );
  
  const balance = transactionAmounts
    .reduce((prev, curr) => (prev += curr), 0)
    .toFixed(2);

  return (
    <div className="container w-full p-2 flex flex-col items-center">
      <h2 className="font-medium text-xl">Balance</h2>
      <div className="text-lg font-mono">{balance}$</div>
    </div>
  );
};

export default Balance;
