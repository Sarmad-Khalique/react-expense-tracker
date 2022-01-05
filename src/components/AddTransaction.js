import { useContext, useState } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const AddTransaction = () => {

    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)
    const { AddTransaction } = useContext(TransactionContext)

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            "id":new Date().getTime(),
            "Description":description,
            "Amount":+amount
        }

        AddTransaction(newTransaction);
    }
    return (
        <div className="flex justify-center my-2">
            <div className="w-3/4 p-2">
                <h3 className="text-center font-semibold text-lg border-b-2">Add Transaction</h3>
                <form onSubmit={onSubmit} className="p-2">
                    <input className="block m-2 w-full p-1" type="text" placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)}/>
                    <input className="block m-2 w-full p-1" type="number" placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} />
                    <span className="text-xs block text-center">Note: "-" for Expense</span>
                    <input className="block m-2 bg-indigo-600 w-full text-white p-1 rounded-md hover:bg-indigo-500 cursor-pointer" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default AddTransaction
