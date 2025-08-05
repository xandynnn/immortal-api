const express = require('express');
const router = express.Router();
const data = require('../mock/magic-attributes.mock.json');

/*
    Busca todos as magias
*/
router.get('/', (_,res) => {
    try {
        const magics = data.magics;
        return res.send({ magics });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all magics' });
    }
});

/*
    Busca de magia por id
*/
router.get('/:id', (req,res) => {
    const id = req.params.id;
    try {
        const magic = data.magics.filter( magic => magic.id === id );
        if ( magic.length == 1 ){
            return res.send({ magic: magic[0] });
        } else {
            return res.status(400).send({ error: `This magic doesn't exist` }); 
        }
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading magic' });
    }
});

module.exports = app => app.use('/eternal-magics', router );