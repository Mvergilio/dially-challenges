function destroyer(arr) {
    var args = Array.from(arguments);
    args.shift();


    for (let i = 0; i < args.length; i++) {
        while (arr.includes(args[i], 0)) {
            arr.splice(arr.indexOf(args[i]), 1)
        }

    }
    return arr;


}



destroyer([1, 2, 3, 2, 2, 3, 1, 2, 3], 2, 3, 1);