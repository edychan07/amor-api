const express = require('express');
const bodyParser = require('body-parser');
const { pool, poolConnect } = require('./db/mssql_conn')
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

async function test() {
    await poolConnect;
    try {
        const req = pool.request();
        // const res = await req.query('select * from mst_bank');
        const res = await req.query('select * from IM_PRD_LINE');
        console.dir(res);
        return res;
    } catch (err) {
        console.error('SQL error', err);
    }
}

test();