const Engineer = require('../lib/Engineer');

describe ("Methods", () => {
    test ('can we get name by calling getName()', () => {
        const name = 'Luca';
        const engineer = new Engineer(name, 1, 'email@email.com', 'kishan254');
        expect(engineer.getName()).toBe(name);
    })
    test ('can we get id by calling getId()', () => {
        const id = '22';
        const engineer = new Engineer('Luca', id, 'email@email.com', 'kishan254');
        expect(engineer.getId()).toBe(id);
    })
    test ('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const engineer = new Engineer('Luca', 22, email, 'kishan254');
        expect(engineer.getEmail()).toBe(email);
    })
    test ('can we get id by calling getGithub()', () => {
        const github = 'kishan254';
        const engineer = new Engineer ('Luca', 22, 'email@email.com', github);
        expect(engineer.getGithub()).toBe(github);
    })
    test('can we get role by calling getRole()', () => {
        const engineer = new Engineer('Luca', 22, 'email@email.com', 'kishan254');
        expect(engineer.getRoles()).toBe('Engineer');
    })
})
