const isUnique = (str) => {
  const lengthOfStr = str.length;
  for (let i = 0; i < lengthOfStr; i++) {
    for (let j = i + 1; j < lengthOfStr; j++) {
      if (str.charAt(i) === str[j]) {
        return false;
      }
    }
  }
  return true;
};
