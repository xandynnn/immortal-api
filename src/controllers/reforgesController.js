const express = require('express');
const router = express.Router();
const data = require('../mock/reforges.mock.json');

/*
    Busca todos os peixes
*/
router.get('/', (req,res) => {
    try {
        const reforges = data.reforges;
        return res.send({ reforges });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading reforges' });
    }
});

module.exports = app => app.use('/reforges', router );