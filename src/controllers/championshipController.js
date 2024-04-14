const express = require('express');
const router = express.Router();
const data = require('../mock/championship.mock.json');

/*
    Busca todos os peixes
*/
router.get('/', (req,res) => {
    try {
        const competitors = data.championship;
        return res.send({ competitors });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all competitors' });
    }
});

module.exports = app => app.use('/championship', router );