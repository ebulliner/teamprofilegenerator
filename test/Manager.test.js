const Manager = require('../lib/Manager');

const manager =

describe("Methods", () => {
    test('can we get name by calling getName()', () => {
        const name = 'Evan';
        const manager = new Manager(name, 1, 'email@email.com', 267);
        expect(manager.getName()).toBe(name);      
    })
    test('can we get id by calling getId()', () => {
        const id = 82;
        const manager = new Manager('Evan', id, 'email@email.com', 267);
        expect(manager.getId()).toBe(id);
    })
    test('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const manager = new Manager('Evan', 23, email, 267)
        expect(manager.getEmail()).toBe(email);
    })
    test('can we get office number by calling getOfficeNumber()', () => {
        const number = 267;
        const manager = new Manager('Evan', 1, 'email@email.com', number);
        expect(manager.getOfficeNumber()).toBe(number);
    })
})