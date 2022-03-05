// function smallestMult(n) {
//     let nArr = [];
//     let i = 1;
//     while (i <= n) {
//         nArr.push(i);
//         i++;

//     }

// }

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
            console.log(i)
        }
        i++
    } while (i <= n2);
    console.log(factorArrN1, factorArrN2)
}

findingFactorOfTwoNum(10, 5)
// smallestMult(20);