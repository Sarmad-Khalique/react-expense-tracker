import { createContext, useReducer } from "react";
import { Reducer } from "./TransactionReducer";

const initialState = {
    transactions: []
};

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    let AddTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        });
    };
    let DelTransaction = (id) => {
        dispatch({
            type: "DEL_TRANSACTION",
            payload: id,
        });
    };

    let contextData = {
        transactions: state.transactions,
        AddTransaction: AddTransaction,
        DelTransaction: DelTransaction,
    }
    return (
        <TransactionContext.Provider
            value={ contextData }
        >
            {children}
        </TransactionContext.Provider>
    );
};