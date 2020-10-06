const sql = require('mssql');

const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PWD,
    server: process.env.SQL_HOST,
    database: process.env.SQL_DB,
    options: {
        encrypt: false,
        enableArithAbort: true
    }
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

pool.on('error', err => {
    console.log(err);
});

module.exports = {
    pool,
    poolConnect
};

// (async function() {
//     try {
//         let pool = await sql.connect(config);
//         let res1 = await pool.request()
//             .input('p1', sql.Int, 3)
//             .query('select top 2 * from Mst_Bank where BankCode=@p1');
//         console.dir(res1);
//     } catch (err) {
//         console.log(err);
//     }
// })();

// sql.on('error', err => {
//     console.log(err);
// });