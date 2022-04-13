const Manager = require('../lib/Manager');

describe ("Methods", () => {
    test ('can we get name by calling getName()', () => {
        const name = 'Kishan';
        const manager = new Manager(name, 1, 'email@email.com', 200);
        expect(manager.getName()).toBe(name);
    })
    test ('can we get id by calling getId()', () => {
        const id = '20';
        const manager = new Manager('Kishan', id, 'email@email.com', 200);
        expect(manager.getId()).toBe(id);
    })
    test ('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const manager = new Manager('Kishan', 20, email, 200);
        expect(manager.getEmail()).toBe(email);
    })
    test ('can we get number by calling getOfficeNumber()', () => {
        const number = 200;
        const manager = new Manager('Kishan', 20, 'email@email.com', number);
        expect(manager.getOfficeNumber()).toBe(number);
    })
})
