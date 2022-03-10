const mysql = require('mysql');
const PoolCluster = require('mysql/lib/PoolCluster');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pokemon'
});

pool.query = util.promisify(pool.query);
module.exports = pool;