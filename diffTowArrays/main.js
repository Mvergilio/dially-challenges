function diffArray(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) < 0) {
            newArr.push(arr2[i]);
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) < 0) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));