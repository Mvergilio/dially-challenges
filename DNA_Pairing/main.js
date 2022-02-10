function pairElement(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "G") newArr.push([str[i], "C"]);
    if (str[i] == "C") newArr.push([str[i], "G"]);
    if (str[i] == "A") newArr.push([str[i], "T"]);
    if (str[i] == "T") newArr.push([str[i], "A"]);
  }
  return newArr;
}
pairElement("CTCTA");
