function domainName(url) {
    //your code here
    const REGEX = /[\.\/]/gi;
    let domain = url.replace(REGEX, " ").split(" ").filter((index) => {
        if (index) return true
    });
    // adge cases
    if (domain.length == 1) {
        console.log(domain[0])
        return domain;
    } else if ((domain[0] == "http:" || domain[0] == "https:") && (domain[1] !== "www")) {
        // console.log(domain[1])
        return domain[1]
    } else if (domain[0] === "www") {
        console.log(domain[0])
        return domain[1]
    } else if (domain[1] === "www") {
        console.log(domain[2])
        return domain[2]
    } else {
        return domain[0];
    }
}
domainName("http://www.6jni8wstqwx-ym.it")
module.exports = domainName;