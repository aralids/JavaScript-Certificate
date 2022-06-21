function checkCashRegister(price, cash, cid) {
  const cid2 = cid.map(a => Object.assign([], a));
  let units = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  let difference = cash - price;
  let change = [];
  let cidSum = cid.reduce(
    (previousValue, currentValue) => previousValue + currentValue[1], 0
  ).toFixed(2);

  if (cidSum < difference) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }  

  let i = units.length - 1;
  while (difference > 0.00 && cid[0][1].toFixed(2) > 0 ) {
    console.log("-");
    units = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
    if (difference >= units[i][1] && cid[i][1] > 0) {if (change.length == 0) {
        change.push(units[i]);
      } else if (change[change.length - 1][0] != units[i][0]) {
        change.push(units[i]);
      } else {
        change[change.length - 1][1] += units[i][1];
      }
      difference = difference - units[i][1];
      difference = difference.toFixed(2);
      cid[i][1] = cid[i][1].toFixed(2) - units[i][1].toFixed(2);
    } else {
      i--;
    }
  }
  cidSum = cid.reduce((previousValue, currentValue) => previousValue + currentValue[1], 0).toFixed(2);
  if (difference != 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  console.log("HERE", cidSum, " == ", difference)
  if (cidSum == difference) {
    return {status: "CLOSED", change: cid2};
  }
  return {status: "OPEN", change: change};
}
