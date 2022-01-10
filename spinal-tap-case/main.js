function spinalTapCase(str) {
  str = str.split(/[^\p{L}\d?]/gu);
  let newStr = str;
  let tempVar = null;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      if (
        newStr[i][j] == newStr[i][j].toUpperCase() &&
        newStr[i].indexOf(newStr[i][j]) !== 0
      ) {
        tempVar = newStr[i].split("");
        tempVar.splice(j, 1, newStr[i][j].toLowerCase());
        tempVar.splice(j, 0, "-");
        tempVar = tempVar.join("");
        tempVar[j].toLowerCase();
        newStr[i] = tempVar;
        console.log(tempVar);
      }
    }
  }
  str = str.join("-").toLowerCase();
  console.log(str);
}

spinalTapCase("thisIsSpinal Tap&more");
