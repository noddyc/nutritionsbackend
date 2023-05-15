const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host:'multigame.cq1wjzrczlio.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '2446592ny',
    database: 'nutritions',

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});


module.exports = connection