function largestPalindromeProduct(n) {
    const NINE = "9"
    let num1 = "",
        num2 = "";
    let polindrome = 0;
    let reversedPolindrome = null;
    for (let i = 0; i < n; i++) {

        num1 += NINE;
    }
    num2 = Number(num1)
    num1 = num2;
    console.log(num1, num2)
    while (polindrome != reversedPolindrome) {
        polindrome = num1 * num2;
        reversedPolindrome = polindrome.toString().split("").reverse().join('');
        reversedPolindrome = Number(reversedPolindrome);
        num1--;
        console.log(num1)

    }
    console.log(polindrome);
    return polindrome;
}

largestPalindromeProduct(3);