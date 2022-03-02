function numPrimorial(n) {
    let primoArr = [];
    let primoArrLength = primoArr.length;
    let primeNumber = 2;
    let count = 0;
    while (primoArrLength < n) {
        let check = primeNumber;
        while (check > 0) {
            if (primeNumber % check == 0) {
                count++
                if (count > 2) {
                    break;
                }
            }
            check--;
        }
        if (count <= 2) primoArr.push(primeNumber)
        count = 0;
        primeNumber++;
        primoArrLength = primoArr.length;
    }
    let primorialProd = primoArr.reduce((first, next) => first * next);
    return primorialProd;
}
numPrimorial(100);
module.exports = numPrimorial;
