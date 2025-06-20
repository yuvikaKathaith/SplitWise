import React, { useState } from "react";
import TransactionInput from "./TransactionInput";
import TransactionList from "./TransactionList";
import SettlementResult from "./SettlementResult";
import { ListChecks, Info } from "lucide-react";

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

    let left = 0;
    let right = balances.length - 1;
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

    const finalResult = `Minimum transactions required: ${transactionCount}\n${resultLines.join(
      "\n"
    )}`;
    setResult(finalResult);
  };

  return (
    <section className="min-h-screen px-6 py-12 md:px-20 text-[#1f1f1f]">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
          Easily track expenses and settle debts with minimal transactions. Simple, smart, and efficient.
        </p>

        <div className="rounded-2xl shadow-sm p-6 md:p-8 bg-[#f8ede8] mb-6">
          <div className="flex items-center justify-center mb-4">
            <Info className="w-6 h-6 text-[#ff7a30] mr-2" />
            <h3 className="text-2xl font-semibold text-[#ff7a30] text-center">Add Transactions</h3>
          </div>
          <TransactionInput
            addTransaction={addTransaction}
            settleDebts={handleSettleDebts}
          />
        </div>

        <div className="rounded-2xl shadow-sm p-6 md:p-8 bg-[#f8ede8] mb-6">
          <div className="flex items-center justify-center mb-4">
            <ListChecks className="w-6 h-6 text-[#ff7a30] mr-2" />
            <h3 className="text-2xl font-semibold text-[#ff7a30] text-center">Transactions</h3>
          </div>
          <TransactionList transactions={transactions} />
        </div>

        {result && (
          <div className="rounded-2xl shadow-sm p-6 md:p-8 bg-[#f8ede8]">
            <div className="flex items-center justify-center mb-4">
              <ListChecks className="w-6 h-6 text-[#ff7a30] mr-2" />
              <h3 className="text-2xl font-semibold text-[#ff7a30] text-center">Settlement Result</h3>
            </div>
            <SettlementResult result={result} />
          </div>
        )}
      </div>
    </section>
  );
};

export default SettlementPage;