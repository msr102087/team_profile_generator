const Intern = require("../lib/Intern");

test('Can set school account from constructor', () => {

    const testValue = "University of Washington";
    const e = new Intern("Foo", 1, "intern@intern.com", testValue);
    expect(e.school).toBe(testValue);


});

test("getRole() should return \"Intern\"", () => {
    const testValue ="Intern";
    const e = new Intern("Foo", 1, "intern@intern.com", testValue)
    expect(e.getRole()).toBe(testValue);

});

test("Can get school from getSchool()", () => {
    const testValue ="University of Washington";
    const e = new Intern("Foo", 1, "intern@intern.com", testValue);
    expect(e.getSchool()).toBe(testValue)
})