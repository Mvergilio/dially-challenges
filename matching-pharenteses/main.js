function validParentheses(parens) {
    // your code here ..
    let amount = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == "(") amount++;
        if (parens[i] == ")") amount--;
        if (amount < 0) return false;
    }
    return amount == 0;

}
console.log(validParentheses("((((((((((())))()))"));