const app = require('./../app');
const employees = [
    {
        name: "John Doe",
        salary: 3000
    },
    {
        name: "Josheph Miller",
        salary: 5000
    },
    {
        name: "Daniel Williams",
        salary: 12000
    }
];
const invalidArray = [
    {
        name: "John Doe",
        salary: 3000
    },
    {
        name: "Josheph Miller",
        salary: 5000
    },
    {
        name: "Daniel Williams",
        salary: 12000
    },
    {
        name: 5,
        salary: "haha"
    }
]
describe('Testing applyBonus function', () => {
    test('Function should return a Promise', (done) => {
        expect(app.applyBonus(employees, 2000)).toBeInstanceOf(Promise);
        done();
    });

    test('Function should reject an Error with the message "Invalid bonus" if bonus parameter is not a number', (done) => {
        app.applyBonus(employees, 'Invalid').catch(err => {
            expect(err).toBeInstanceOf(Error);
            done();
        });
    });

    test('Function should reject an Error with the message "Invalid array format" if array is not in the specified format', (done) => {
        app.applyBonus(invalidArray, 1200).catch(err => {
            expect(err).toBeInstanceOf(Error);
            done();
        });
    });

    test('Function should reject a message: "Bonus too small" if the bonus is not at least 10% of the biggest salary', (done) => {
        app.applyBonus(employees, 1000).catch(err => {
            expect(err).toMatch('Bonus too small');
            done();
        });
    });

    test('Fuction should return the expected values', (done) => {
        app.applyBonus(employees, 1200).then(res => {
            expect(res[2].salary).toBe(13200);
            done();
        });
    });
});