const Intern = require('../lib/Intern');

describe ("Methods", () => {
    test ('can we get name by calling getName()', () => {
        const name = 'Marco';
        const intern = new Intern(name, 1, 'email@email.com', 'kishan254');
        expect(intern.getName()).toBe(name);
    })
    test ('can we get id by calling getId()', () => {
        const id = '21';
        const intern = new Intern('Marco', id, 'email@email.com');
        expect(intern.getId()).toBe(id);
    })
    test ('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const intern = new Intern('Marco', 21, email);
        expect(intern.getEmail()).toBe(email);
    })
    test ('can we get school by calling getSchool()', () => {
        const school = 'UWA';
        const intern = new Intern ('Marco', 21, 'email@email.com', school);
        expect(intern.getSchool()).toBe(school);
    })
    test('can we get role by calling getRole()', () => {
        const intern = new Intern('Marco', 21, 'email@email.com', 'UWA');
        expect(intern.getRole()).toBe('Intern');
    })
})
