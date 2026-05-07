// solution 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  const result = numbers.filter((num) => num % 2 === 0);
  return result;
};
// check result 1 way
const evenNumber = filterEvenNumbers([101, 100, 105, 1010, 112, 113, 114, 116]);
console.log(evenNumber);
// another way to get result
// console.log(filterEvenNumbers([101, 100, 105, 1010, 112, 113, 114, 116]));

// solution 2

const reverseString = (str: string): string => {
  const letterSplit = str.split("");
  const letterReverse = letterSplit.reverse();
  const result = letterReverse.join("");
  //single line solution
  //   const result = str.split("").reverse().join("");
  return result;
};

console.log(reverseString("Ranjit Kumar Mandal"));

// solution 3
const checkType = (StringOrNumber: number | string) => {
  if (typeof StringOrNumber === "number") {
    return "number";
  } else if (typeof StringOrNumber === "string") {
    return "string";
  }
};
console.log(checkType("Mollika Computer"));
