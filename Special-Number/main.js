function specialNumber(n) {
    const STRING_NUM = n.toString().split("").sort((a, b) => a - b);
    let result = "";
    for (let i = 0; i < STRING_NUM.length; i++) {
        let container = parseInt(STRING_NUM[i], 10);
        if (container > 5) {
            result = "NOT!!";
            break;
        } else {
            result = "Special!!"

        }
    }
    return result;

}
console.log(specialNumber(5));