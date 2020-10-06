const express = require('express');
const prdGroup = require('../model/prd_group');

const router = new express.Router();

router.get('/groups', async(req, res) => {
    try {
        const result = await prdGroup.getPrdGroup();
        if (!result) {
            return res.status(404).send();
        }
        res.send(result);
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;