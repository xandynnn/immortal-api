const express = require('express');
const router = express.Router();
const data = require('../mock/corvus.mock.json');

/*
    Busca todos os eventos
*/
router.get('/', (req,res) => {
    try {
        const corvus = data.corvus;
        return res.send({ corvus });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all events' });
    }
});

module.exports = app => app.use('/corvus', router );