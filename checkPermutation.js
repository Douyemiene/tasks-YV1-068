const checkPermute = (strOne, strTwo) => {
  let strOneCharCount = {};
  let strTwoCharCount = {};

  //if strings have unequal lengths then they can't be permutations
  if (strOne.length == strTwo.length) {
    for (let i = 0; i < strOne.length; i++) {
      if (strOneCharCount.hasOwnProperty(strOne[i])) {
        strOneCharCount[strOne[i]]++;
      } else {
        strOneCharCount[strOne[i]] = 1;
      }

      if (strTwoCharCount.hasOwnProperty(strTwo[i])) {
        strTwoCharCount[strTwo[i]]++;
      } else {
        strTwoCharCount[strTwo[i]] = 1;
      }
    }

    let isPermute = true;
    for (let i of Object.keys(strOneCharCount)) {
      if (strOneCharCount[i] != strTwoCharCount[i]) {
        ans = false;
      }
    }

    return isPermute;
  }

  return false;
};
