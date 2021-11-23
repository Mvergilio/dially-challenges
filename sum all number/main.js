function digital_root(n) {
    let result = 0;
    let num = [];
    while (n >= 10) {
        num = String(n).split("").map((element) => {
            return Number(element);
        })
        result = num.reduce((acum, element) => {
            return acum += element;

        })
        n = result;
    }

    console.log(n)
    return n;
}
digital_root(16);