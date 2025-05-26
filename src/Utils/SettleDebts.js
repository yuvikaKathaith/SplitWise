export function settleDebts(transactions) {
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

  return `Minimum transactions required: ${transactionCount}\n${resultLines.join("\n")}`;
}
