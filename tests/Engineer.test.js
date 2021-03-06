
const Engineer = require("../lib/Engineer");

test('Can set GitHub account from constructor', () => {

    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "engineer@engineer.com", testValue);
    expect(e.github).toBe(testValue);


});

test("getRole() should return \"Engineer\"", () => {
    const testValue ="Engineer";
    const e = new Engineer("Foo", 1, "engineer@engineer.com", testValue)
    expect(e.getRole()).toBe(testValue);

});

test("Can get GitHub username from getGitHub()", () => {
    const testValue ="GitHubUser";
    const e = new Engineer("Foo", 1, "engineer@engineer.com", testValue);
    expect(e.getGitHub()).toBe(testValue)
})