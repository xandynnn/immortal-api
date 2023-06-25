const express = require('express');
const router = express.Router();
const data = require('../mock/gems.mock.json');

/*
    Busca todas as gemas
*/
router.get('/', (req,res) => {
    try {
        const gems = data.gems;
        return res.send({ gems });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all gems' });
    }
});

/*
    Busca de gemas por slug
*/
router.get('/:gemSlug', (req,res) => {
    const gemSlug = req.params.gemSlug;
    try {
        const gem = data.gems.filter( gem => gem.slug === gemSlug );
        if ( gem.length == 1 ){
            return res.send({ gem: gem[0] });
        } else {
            return res.status(400).send({ error: `This gem doesn't exist` }); 
        }
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading gem' });
    }
});

module.exports = app => app.use('/gems', router );