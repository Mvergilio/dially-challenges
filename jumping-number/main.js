function jumpingNumber(n) {
    let tempEle = "";
    let tempResult = "Jumping!!";
    let num = String(n).split("");

    for (let i = 0; i < num.length; i++) {
        tempEle = num[i + 1];
        if (!num.includes(tempEle)) {
            break;
        }
        if (Number(num[i]) + 1 == Number(tempEle) || Number(num[i]) - 1 == Number(tempEle)) {
            tempResult = "Jumping!!";

        } else {
            tempResult = "Not!!";
            break;
        }
    }
    return tempResult;
}
console.log(jumpingNumber(7));