function smallestMult(n) {
    let nArr = [];
    let i = 1;
    while (i <= n) {
        nArr.push(i);
        i++;
    }
    function callBackNArr(array) {
        // let array2 = [];
        const first = array.shift();
        const second = array.shift();
        let factor = (first * second) / findingFactorOfTwoNum(first, second);
        if (array.length < 1) {
            array.unshift(factor);
            return array[0];
        } else {
            array.unshift(factor);
            callBackNArr(array);
        }
        return array[0];
    }
    let multiple = callBackNArr(nArr);
    console.log(multiple);
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