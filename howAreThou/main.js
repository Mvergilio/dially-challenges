function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter((obj) => {
        for (var i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });


    // Only change code above this line
}

let nameItem = whatIsInAName([{ "apple": 1, "bat": 3 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
console.log(nameItem);