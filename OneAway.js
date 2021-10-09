let oneAway = (strOne, strTwo) => {
  let edits = 1;
  let maxLength = Math.max(strOne.length, strTwo.length);
  let diff = Math.abs(strOne.length - strTwo.length);

  if (diff > edits) {
    return false;
  }
  for (let i = 0, j = 0; i < maxLength || j < maxLength; i++, j++) {
    let charOne = strOne[i];
    let charTwo = strTwo[j];
    if (charOne !== charTwo) {
      edits--;
      if (edits < 0) {
        return false;
      }
      if (strOne[i] === strTwo[j + 1]) {
        j++;
      } else if (strOne[i + 1] === strTwo[j]) {
        i++;
      }
    }
  }
  return true;
};

console.log(oneAway("bale", "ple"));
console.log(oneAway("pale", "ple"));
