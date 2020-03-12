const express = require('express');
const app = express();

const USERS = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Smith'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Williams'
    }
];


app.get('/users', (req, res, next) => {
    res.json(USERS);
});

app.get('/users/:userId', (req, res, next) => {
    res.json(USERS.find(user => user.id === parseInt(req.params.userId)));
});

exports.main = app;