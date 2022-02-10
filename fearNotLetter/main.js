function fearNotLetter(str) {
  let alfabet = "abcdefghijklmnopqrstuvwxyz";
  let strStartLetter = str.slice(0, 1);
  strStartLetter = alfabet.indexOf(strStartLetter);
  let strEndLetter = str.slice(-1);
  strEndLetter = alfabet.indexOf(strEndLetter);
  alfabet = alfabet.substring(strStartLetter, strEndLetter + 1).split("");
  let returner;
  for (let i = 0; i < alfabet.length; i++) {
    if (str.indexOf(alfabet[i]) < 0) {
      returner = alfabet[i];
    }
  }

  return returner;
}
fearNotLetter("bcdf");
