const request = require('supertest');
const app = require('./../app');

describe('TEST API POST Method', () => {
    test('If request body is not sent server should respond with status code 500 and {"message": "Body is missing"}', (done) => {
        request(app).post('/students').
        send({}).
        expect(500).
        then(res => {
            expect(JSON.parse(res.text).message).toBe('Body is missing');
            done();
        })
    })

    test('If request body is present but not respected the specified format server should respond with status code 500 and {"message": "Invlaid body format"}', (done) => {
        request(app).post('/students').
            send({something: "else"}).
            expect(500).
            then(res => {
                expect(JSON.parse(res.text).message).toBe('Invalid body format');
                done();
            })
    })

    test('Student age should not be negative', (done) => {
        request(app).post('/students').send({
            name: "PAPA",
            surname: "TATA",
            age: -400
        }).expect(500).then(res => {
            expect(JSON.parse(res.text).message).toBe('Age should be a positive number');
            done();
        })
    })

    test('If the sent student already exists send status code 500 with body {"message": "Student already exists"}. Checking is done by name', (done) => {
        request(app).post('/students').
            send({
                name: "Gigel",
                surname: "Popel",
                age: 23
            }).expect(500).then(res => {
                expect(JSON.parse(res.text).message).toBe('Student already exists');
                done();
            })
    })

    test('If the body is valid the student should be added to the array', (done) => {
        request(app).post('/students').send({
            name: "test_name",
            surname: "test_surname",
            age: 25
        }).expect(201).then(res => {
            expect(JSON.parse(res.text).message).toBe('Created');
            expect(app.locals.students.length).toBe(3);
            done();
        })
    })
});