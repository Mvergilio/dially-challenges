function largestPalindromeProduct(n) {
    const NINE = "9";
    let num1 = "",
        num2 = "";
    let polindrome = 0;
    let reversedPolindrome = null;
    let palindromeArray = []
    for (let i = 0; i < n; i++) {
        num1 += NINE;
    }
    num2 = Number(num1);
    num1 = num2;

    for (num1; num1 > 0; num1--) {
        let i = num2;
        for (i; i > 0; i--) {
            polindrome = num1 * i;
            reversedPolindrome = polindrome.toString().split("").reverse().join("");
            reversedPolindrome = Number(reversedPolindrome);
            if (polindrome == reversedPolindrome) {
                palindromeArray.push(polindrome);
            }

        }


    }
    polindrome = Math.max(...palindromeArray)
    return polindrome;
}

largestPalindromeProduct(3);