function sumSquareDifference(n) {
    let nArr = [];
    let i = 1;
    while (i <= n) {
        nArr.push(i);
        i++;
    }
    let nArrCopy = nArr.slice().map((elem) => { return elem * elem; }).reduce((a, b) => { return a + b })
    nArr = nArr.reduce((a, b) => { return a + b });
    nArr = nArr * nArr;
    n = nArr - nArrCopy;
    return n;
}

sumSquareDifference(100);