const urlify = (str, length) => {
  let totalSpaces = str.length - length;
  let spacesBeforeAlphabet = 0;
  let newString = "";

  //breaks if the string doesn't begin with a white space char
  for (let char of str) {
    if (char === " ") {
      spacesBeforeAlphabet++;
    } else break;
  }

  for (let i = spacesBeforeAlphabet; i < str.length; i++) {
    if (i < str.length - totalSpaces + spacesBeforeAlphabet) {
      if (str[i] === " ") {
        newString += "%20";
      } else {
        newString += str[i];
      }
    }
  }

  return newString;
};
