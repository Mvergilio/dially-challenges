function smallestMult(n) {
    let holder = n,
        arrayOfNumbers = [];
    while (holder > 0) {
        arrayOfNumbers.unshift(holder);
        holder--;
    }
    callBackByDivision(arrayOfNumbers);
}

function callBackByDivision(arr) {
    let product = 1;
    let result = true;
    let arrResult;
    let arrProduct = []

    do {
        arrResult = arr.some((elem) => {
            return elem % 2 === 0 ? true : false;
        });
        if (arrResult) {
            product = 2;
        }
        if (product % 2 == 0 && product !== 2) {
            product++;
        } else if (!arrResult) {
            arrProduct.push(product);
            arr = arr.map((element) => {
                if (element % product == 0) {
                    return element / product;
                } else {
                    return element;
                }
            });
            product++
        }
        result = arr.every((elem) => {
            return elem === 1;
        });
        if (product > arr.length) {
            product = 1;
        }

        console.log(arrProduct, product)
    } while (result == false);
}
smallestMult(20);