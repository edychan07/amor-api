const { pool, poolConnect } = require('../db/mssql_conn');

async function getPrdGroup() {
    await poolConnect;
    try {
        const req = pool.request();
        const res = await req.query('select top 10 pg_prd_group_code as [code],pg_prd_group_desc as [desc],pg_prd_line_code as [brand_code] from IM_PRD_GROUP');
        // console.dir(res.recordset);
        return res.recordset;
    } catch (err) {
        console.error('SQL error', err);
    }
}

const prdGroup = {
    getPrdGroup
};

module.exports = prdGroup;