function numPrimorial(n) {
    let primoArr = [];
    let primoArrLength = primoArr.length;
    let primeNumber = 2;
    let check = 0;
    while (primoArrLength < n) {
        for (let i = 0; i < 100; i++) {
            let holder = primeNumber % i;
            if (primeNumber % primeNumber == 0 && primeNumber / 1 == primeNumber && holder > 0) {
                check++;
            }
        }

        if (check > 2) {
            break;

        } else if (check <= 2 && !primoArr.includes(primeNumber)) {
            primoArr.push(primeNumber)
        }
        check = 0;
        primeNumber++;
        primoArrLength = primoArr.length;
    }
    console.log(primoArr)
}
numPrimorial(5);
// module.exports = numPrimorial;
