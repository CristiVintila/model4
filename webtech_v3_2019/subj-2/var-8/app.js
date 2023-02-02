const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.students = [
    {
        name: "Gigel",
        surname: "Popel",
        age: 23
    },
    {
        name: "Gigescu",
        surname: "Ionel",
        age: 25
    }
];

app.get('/students', (req, res) => {
    res.status(200).json(app.locals.products);
});

// - Daca nu exista body pentru cererea http, trebuie sa returnati un JSON cu urmatorul format: `{message: "Body is missing"}`. Codul de raspuns trebuie sa fie: `500`;
// - Daca body-ul nu respecta formatul unui student, trebuie sa returnati un JSON cu urmatorul format: `{message: "Invlid body format"}`. Codul de raspuns trebuie sa fie: `500`;
// - Varsta unui student trebuie sa fie mai mare ca 0.In caz contrar trebuie sa returnati un JSON cu urmatorul format: `{message: "Age should be a positive number"}`. Codul de raspuns trebuie sa fie: `500`; 
// - Daca studentul exista deja in vector, trebuie sa returnati un JSON cu urmatorul format: `{message: "Student already exists"}`.Codul de raspuns trebuie: `500`. Unicitatea se face in functie de nume;
// - Daca body-ul are formatul corespunzator, studentul trebuie adaugat in vector si sa returnati un JSON cu urmatorul format: `{message: "Created"}`. Codul de raspuns trebuie sa fie: `201`;

app.post('/students', (req, res, next) => {
    if (Object.keys(req.body).length===0){
        res.status(500).json({message: "Body is missing"})
    }
    else if(!req.body.name || !req.body.surname || !req.body.age){
        res.status(500).json({message: "Invalid body format"})
    }
    else if(req.body.age<0){
        res.status(500).json({message: "Age should be a positive number"})
    } else {
        let studName = app.locals.students.map(x=>x.name)
        if(studName.findIndex(x=>x===req.body.name)!==-1){
            res.status(500).json({message: "Student already exists"})
        } else{
            let stud = {
                name: req.body.name,
                surname: req.body.surname,
                age: req.body.age
            }
            app.locals.students.push(stud)
            res.status(201).json({message: "Created"})
        }
    }
    
})

module.exports = app;