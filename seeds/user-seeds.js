const { User } = require('../models');

const userData = [{
        username: 'Prince',
        password: 'password'

    },
    {
        username: 'Michael',
        password: 'password'
    },
  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;