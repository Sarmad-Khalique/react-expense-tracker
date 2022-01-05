const AccountSummary = () => {
    const transactions = [
        {
            id: 1,
            Description: "Test#1",
            Amount: 100,
        },
        {
            id: 2,
            Description: "Test#2",
            Amount: -100,
        },
        {
            id: 3,
            Description: "Test#3",
            Amount: -1000,
        },
        {
            id: 4,
            Description: "Test#4",
            Amount: 2100,
        },
    ];

    const transactionAmounts = transactions.map(transaction => transaction.Amount);
    const inocme = transactionAmounts.filter(amount => amount > 0).reduce((prev, curr) => prev += curr, 0).toFixed(2);
    const expense = transactionAmounts.filter(amount => amount < 0).reduce((prev, curr) => prev += curr, 0).toFixed(2);
    return (
        <div className="flex justify-center">
            <div className="shadow-lg flex items-center text-center p-2 w-3/4">
                <div className="w-1/2 p-2 border-r-4">
                    <h3 className="text-lg font-semibold">Income</h3>
                    <span className="font-mono font-semibold text-green-500">{inocme}$</span>
                </div>
                <div className="w-1/2 p-2">
                    <h3 className="text-lg font-semibold">Expense</h3>
                    <span className="font-mono font-semibold text-red-500">{-expense}$</span>
                </div>
            </div>
        </div>
    )
}

export default AccountSummary
