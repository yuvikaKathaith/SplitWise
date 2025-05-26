// src/Components/TransactionInput.jsx
import React, { useState } from "react";

function TransactionInput({ addTransaction, settleDebts }) {
  const [payer, setPayer] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    if (!payer || !receiver || !amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter valid payer, receiver and amount.");
      return;
    }

    addTransaction(payer, receiver, amount);
    setPayer("");
    setReceiver("");
    setAmount("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Payer"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
        style={{ margin: "5px" }}
      />
      <input
        type="text"
        placeholder="Receiver"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        style={{ margin: "5px" }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ margin: "5px" }}
      />
      <button onClick={handleAdd} style={{ margin: "5px" }}>
        Add Transaction
      </button>
      <button onClick={settleDebts} style={{ margin: "5px" }}>
        Settle Debts
      </button>
    </div>
  );
}

export default TransactionInput;
