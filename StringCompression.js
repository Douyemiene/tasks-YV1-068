let stringCompression = (str) => {
  let out = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    let next = str[i + 1];
    if (cur === next) {
      count++;
    } else {
      out += cur + String(count);
      count = 1;
    }
  }
  return out.length < str.length ? out : str;
};

console.log(stringCompression("aabcccccaaa"));
