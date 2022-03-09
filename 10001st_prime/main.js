function nthPrime(n) {
    let arr = [2];
    let isPrime = true;
    let num = 3;
    while (arr.length != n) {
        let max = Math.ceil(Math.sqrt(num));
        for (let j = 0; arr[j] <= max; j++) {
            if (num % arr[j] == 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) arr.push(num);
        isPrime = true
        num += 2;

    }
    return arr.at(-1);
}

nthPrime(10002);
