import { TransactionContext } from "../context/TransactionContext";
import Transaction from "./Transaction";
import { useContext } from "react";

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className="flex justify-center my-2">
      <div className="w-3/4 p-2">
        <h3 className="text-center font-semibold text-lg border-b-2">
          Transactions History
        </h3>
        <div>
          <ul>
            {transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
