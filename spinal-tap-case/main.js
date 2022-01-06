function spinalTapCase(str) {
    str = str.replace(/[^\p{L}\d\s@#]/ug, "-")
    let newStr = str;
    let i = 0;
    let strArray = []
    let index = 0;
    while (i < newStr.length) {
        if (newStr[i] == newStr[i].toUpperCase() && newStr[i] !== "-") {
            let string = newStr.slice(index, i);
            let firstString = newStr.slice(i, -0);
            strArray.pop()
            strArray.push(string, firstString);
            index = i;
        }
        console.log(strArray.join('-'));
        i++
    }

}


spinalTapCase("spinal_CaseWord*test")