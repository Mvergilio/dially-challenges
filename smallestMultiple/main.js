function smallestMult(n) {
    let nArr = [];
    let i = 1;
    while (i <= n) {
        nArr.push(i);
        i++;
    }
    for (let j = 0; j < nArr.length; j++) {
        const element = nArr[j];

    }

}

function findingFactorOfTwoNum(n1, n2) {
    let factorArrN1 = [];
    let factorArrN2 = [];
    // edge case
    if (n1 == 1 || n2 == 1) return 1;

    let i = 1;


    do {
        if (n1 % i == 0) {
            factorArrN1.push(i);
        }
        i++
    } while (i <= n1);


    i = 1;
    do {

        if (n2 % i == 0) {
            factorArrN2.push(i);
        }
        i++
    } while (i <= n2);

    // factor
    let factor = 0;
    if (factorArrN1 < factorArrN2) {
        factor = findingLengthOfArray(factorArrN1, factorArrN2);
    } else {
        factor = findingLengthOfArray(factorArrN2, factorArrN1);
    }
    return factor;
}
function findingLengthOfArray(arr1, arr2) {
    let factor = [];
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        if (arr2.includes(element)) {
            factor.push(element)
        }

    }
    return factor.at(-1);
}
smallestMult(20);