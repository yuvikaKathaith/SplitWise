// src/Components/TransactionList.jsx
import React from "react";

function TransactionList({ transactions }) {
  return (
    <div>
      <h3>Transactions:</h3>
      <ul>
        {transactions.map(([payer, receiver, amount], index) => (
          <li key={index}>
            {payer} pays {receiver} ₹{amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;