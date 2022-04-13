const Employee = require('../lib/Empoyee');

describe ("Methods", () => {
    test ('can we get name by calling getName()', () => {
        const name = 'Kishan';
        const employee = new Employee(name, 1, 'email@email.com');
        expect(employee.getName()).toBe(name);
    })
    test ('can we get id by calling getId()', () => {
        const id = '20';
        const employee = new Employee('Kishan', id, 'email@email.com');
        expect(employee.getId()).toBe(id);
    })
    test ('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const employee = new Employee('Kishan', 20, email);
        expect(employee.getEmail()).toBe(email);
    })
    test ('can we get id by calling getId()', () => {
        const employee = new Employee ('Kishan', 20, 'email@email.com')
        expect(employee.getRole()).toBe('Employee');
    })
})
