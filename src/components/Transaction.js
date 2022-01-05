import { TransactionContext } from "../context/TransactionContext";

import { useContext } from "react";

const Transaction = ({ transaction }) => {
  const { DelTransaction } = useContext(TransactionContext);
  const border =
    transaction.Amount > 0 ? " border-green-600 " : " border-red-600 ";

  return (
    <li className="flex p-2 m-1 justify-between">
      <button
        className="p-1 w-1/12 mx-2 bg-red-600 text-center text-white rounded"
        onClick={()=>DelTransaction(transaction.id)}
      >
        x
      </button>
      <span className="p-1 w-full text-left">{transaction.Description}</span>
      <span className={"p-1 w-full text-right border-r-4" + border}>
        {transaction.Amount}$
      </span>
    </li>
  );
};

export default Transaction;
