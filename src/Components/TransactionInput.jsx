import React, { useState } from "react";

const TransactionInput = ({ addTransaction, settleDebts }) => {
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
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Payer"
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
        />
        <input
          type="text"
          placeholder="Receiver"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
        />
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={handleAdd}
          className="bg-[#ff7a30] hover:bg-[#ff9d69] text-white py-2 px-6 rounded-full"
        >
          Add Transaction
        </button>
        <button
          onClick={settleDebts}
          className="bg-[#4a6fdc] hover:bg-[#6d89f0] text-white py-2 px-6 rounded-full"
        >
          Settle Debts
        </button>
      </div>
    </div>
  );
};

export default TransactionInput;