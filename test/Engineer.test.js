const Engineer = require('../lib/Engineer');

describe("Methods", () => {
    test('can we get name by calling getName()', () => {
        const name = 'Evan';
        const engineer = new Engineer(name, 1, 'email@email.com', 'ebulliner');
        expect(engineer.getName()).toBe(name);
    })
    test('can we get id by calling getId()', () => {
        const id = 82;
        const engineer = new Engineer('Evan', id, 'email@email.com', 'ebulliner');
        expect(engineer.getId()).toBe(id);
    })
    test('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const engineer = new Engineer('Evan', 23, email, 'ebulliner');
        expect(engineer.getEmail()).toBe(email);
    })
    test('can we get github by calling getGithub()', () => {
        const github = 'ebulliner';
        const engineer = new Engineer('Evan', 23, 'email@email.com', github);
        expect(engineer.getGithub()).toBe(github);
    })
    test('can we get role by calling getRole()', () => {
        const engineer = new Engineer('Evan', 23, 'email@email.com', 'Northwestern');
        expect(engineer.getRole()).toBe('Engineer');
    })
})