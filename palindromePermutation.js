const isPermutationOfPalindrome = (str) => {
  let freqOfChars = {};
  //strip the string of white spaces and make every char lowercase
  str = str.toLowerCase().split(" ").join("");

  for (let charWeAt of str) {
    //add char key if doesn't exist or increase count if it does
    if (freqOfChars.hasOwnProperty(charWeAt)) {
      freqOfChars[charWeAt]++;
    } else {
      freqOfChars[charWeAt] = 1;
    }
  }

  const valuesOfChars = Object.values(freqOfChars);
  let countOdd = 0;
  //count number of odd values in freqOfChars
  for (let freqValue of valuesOfChars) {
    if (freqValue % 2 == 1) {
      countOdd++;
    }
  }

  const isPalinPerm = countOdd < 2;
  return isPalinPerm;
};

console.log(isPermutationOfPalindrome("Tact Coa"));
console.log(isPermutationOfPalindrome("Tact boa"));
