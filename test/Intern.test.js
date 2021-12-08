const Intern = require('../lib/Intern');

describe("Methods", () => {
    test('can we get name by calling getName()', () => {
        const name = 'Sam';
        const intern = new Intern(name, 1, 'email@email.com');
        expect(intern.getName()).toBe(name);      
    })
    test('can we get id by calling getId()', () => {
        const id = 82;
        const intern = new Intern('Sam', id, 'email@email.com');
        expect(intern.getId()).toBe(id);
    })
    test('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const intern = new Intern('Sam', 23, email);
        expect(intern.getEmail()).toBe(email);
    })
    test('can we get school by calling getSchool()', () => {
        const school = 'Northwestern';
        const intern = new Intern('Sam', 23, 'email@email.com', school);
        expect(intern.getSchool()).toBe(school);
    })
    test('can we get role by calling getRole()', () => {
        const intern = new Intern('Sam', 23, 'email@email.com', 'Northwestern');
        expect(intern.getRole()).toBe('Intern');
    })
})