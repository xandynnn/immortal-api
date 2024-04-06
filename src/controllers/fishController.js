const express = require('express');
const router = express.Router();
const data = require('../mock/fish.mock.json');

/*
    Busca todos os peixes
*/
router.get('/', (req,res) => {
    try {
        const fish = data.fish;
        return res.send({ fish });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all fish' });
    }
});

module.exports = app => app.use('/fish', router );