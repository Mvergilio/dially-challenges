const EXTRACT_DOMAIN = require('./index');

test('Should pass sample tests', () => {
    expect(EXTRACT_DOMAIN("http://google.co.jp")).toBe("google");
    expect(EXTRACT_DOMAIN("www.xakep.ru")).toBe("xakep");
})