const Manager = require("../lib/Manager");

test('Can set office number from constructor', () => {

    const testValue = "Suite:190";
    const e = new Manager("Foo", 1, "manager@manager.com", testValue);
    expect(e.office).toBe(testValue);


});

test("getRole() should return \"Manager\"", () => {
    const testValue ="Manager";
    const e = new Manager("Foo", 1, "manager@manager.com", testValue)
    expect(e.getRole()).toBe(testValue);

});

test("Can get office number from getOffice()", () => {
    const testValue ="Suite 190";
    const e = new Manager("Foo", 1, "manager@manager.com", testValue);
    expect(e.getOffice()).toBe(testValue)
})