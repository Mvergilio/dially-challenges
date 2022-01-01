function smallestMult(n) {
    let product = 1;
    let multiple = null;
    let holder = n;
    let arrayOfMultiples = [],
        arrayOfNumbers = [];
    while (holder > 0) {
        arrayOfNumbers.unshift(holder);
        holder--;
    }
    let j = arrayOfNumbers.length;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        multiple = n * product;
        while (j) {
            if (multiple % arrayOfNumbers[j] != 0) {
                console.log(multiple);
            }
            j--;
        }
        product++;
    }

}

smallestMult(20);