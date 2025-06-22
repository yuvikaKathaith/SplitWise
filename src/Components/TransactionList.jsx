import React from "react";

const TransactionList = ({ transactions }) => {
  if (transactions.length === 0) return <p className="text-gray-500">No transactions added yet.</p>;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-[#ff7a30]">Transactions</h3>
      <ul className="space-y-2 text-gray-700 text-left max-w-md mx-auto">
        {transactions.map(([payer, receiver, amount], index) => (
          <li key={index}>
            {payer} pays {receiver} ₹{amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
