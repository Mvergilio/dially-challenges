function smallestMult(n) {
    let product = 2;
    let tempHolder = null;
    let holder = n;
    let arrayOfPrime = [],
        arrayOfFactors = [],
        arrayOfNumbers = [];
    while (holder > 0) {
        arrayOfNumbers.unshift(holder);
        holder--;
    }


    while (!(arrayOfNumbers.every((elem) => { elem == 1 }))) {
        arrayOfNumbers = arrayOfNumbers.map((elem) => {

            if (elem % product == 0 && product % 2 !== 0 && product != 2) {
                return elem / product;
            } else {
                if (elem % product > 0) {
                    return elem
                } else {
                    product++;
                }
            }

        })
        console.log(arrayOfNumbers);
    }
}
smallestMult(5);