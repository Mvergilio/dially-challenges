function uniteUnique(arr) {
    arr = Array.from(arguments)
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (newArr.includes(arr[i][j])) continue;
            else {
                newArr.push(arr[i][j]);
            }
        }
    }
    console.log(newArr)
  return newArr;
}
uniteUnique([1, 3, 2], [5, 4], [5, 6]);
