import React, { useState } from "react";
import TransactionInput from "./TransactionInput";
import TransactionList from "./TransactionList";
import SettlementResult from "./SettlementResult";

const SettlementPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [result, setResult] = useState("");

  const addTransaction = (payer, receiver, amount) => {
    const newTransaction = [payer.trim(), receiver.trim(), Number(amount)];
    setTransactions([...transactions, newTransaction]);
  };

  const handleSettleDebts = () => {
    const net = {};
    for (const [payer, receiver, amount] of transactions) {
      net[payer] = (net[payer] || 0) - amount;
      net[receiver] = (net[receiver] || 0) + amount;
    }

    const balances = [];
    for (const person in net) {
      if (net[person] !== 0) {
        balances.push([net[person], person]);
      }
    }

    balances.sort((a, b) => a[0] - b[0]);
    let left = 0, right = balances.length - 1;
    const resultLines = [];
    let transactionCount = 0;

    while (left < right) {
      let [debitAmount, debtor] = balances[left];
      let [creditAmount, creditor] = balances[right];

      const settleAmount = Math.min(-debitAmount, creditAmount);
      resultLines.push(`${debtor} pays ${creditor} ₹${settleAmount}`);
      transactionCount++;

      debitAmount += settleAmount;
      creditAmount -= settleAmount;

      if (debitAmount === 0) left++;
      else balances[left][0] = debitAmount;

      if (creditAmount === 0) right--;
      else balances[right][0] = creditAmount;
    }

    const finalResult = `Minimum transactions required: ${transactionCount}\n${resultLines.join("\n")}`;
    setResult(finalResult);
  };

  return (
    <section className="min-h-screen px-6 py-16 text-center text-[#1f1f1f]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Settle Debts Effortlessly with <span className="text-[#ff7a30]">Splitwise.</span>
        </h2>
        <p className="text-gray-600 text-md mb-12">
          Quickly calculate who owes whom and minimize the number of transactions in your group.
        </p>

        <div className="bg-[#f8ede8] rounded-xl p-6 md:p-10 shadow mb-10">
          <TransactionInput addTransaction={addTransaction} settleDebts={handleSettleDebts} />
        </div>

        <div className="bg-[#f8ede8] rounded-xl p-6 md:p-10 shadow mb-10">
          <TransactionList transactions={transactions} />
        </div>

        <div className="bg-[#f8ede8] rounded-xl p-6 md:p-10 shadow">
          <SettlementResult result={result} />
        </div>
      </div>
    </section>
  );
};

export default SettlementPage;
