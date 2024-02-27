function binary(num) {
  const baseNumber = 2;
  let quotient = num;
  const remainder = [];

  while (quotient > 0) {
    let tempQuotient = quotient / baseNumber;
    const tempRemainder = quotient % baseNumber;
    remainder.push(tempRemainder);
    quotient = Math.floor(tempQuotient);
  }

  console.log("🔴🔴🔴🔴🔴", remainder);

  let tempBinary = "";
  remainder.forEach((num) => (tempBinary = tempBinary.concat(num)));

  const anotherTempbinary = tempBinary.toString();

  const temp = reverseString(anotherTempbinary);

  const binary = parseInt(temp);

  console.log("🟢🟢🟢🟢🟢", binary);
}

function reverseString(str) {
  const strRev = str.split("").reverse().join("");
  return strRev;
}

binary(50);
