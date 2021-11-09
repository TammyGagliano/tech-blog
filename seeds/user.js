const { User } = require('../models');

const userData = [
    {
        "username": 'averagestudent124', 
        "email": 'michael@gmail.com',
        "password": 'getit1224'
    },
    {
        "username": 'google_was_my_idea44', 
        "email": 'luke@gmail.com',
        "password": 'shemygal33'
    },
    {
        "username": 'cuteasducks123', 
        "email": 'mary@gmail.com',
        "password": 'seriously33'
    },
    {
        "username": 'shefun888', 
        "email": 'leisa@gmail.com',
        "password": 'letsplaykk'
    },
    {
        "username": 'horsemom990', 
        "email": 'stephanie@gmail.com',
        "password": 'daisyhorse4'
    }, 
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;