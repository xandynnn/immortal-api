const express = require('express');
const router = express.Router();
const data = require('../mock/gear-sets.mock.json');

/*
    Busca todos os sets
*/
router.get('/', (req,res) => {
    try {
        const sets = data.sets;
        return res.send({ sets });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all sets' });
    }
});

/*
    Busca de Set por slug
*/
router.get('/:setSlug', (req,res) => {
    const setSlug = req.params.setSlug;
    try {
        const set = data.sets.filter( set => set.slug === setSlug );
        if ( set.length == 1 ){
            return res.send({ set: set[0] });
        } else {
            return res.status(400).send({ error: `This set doesn't exist` }); 
        }
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading set' });
    }
});

module.exports = app => app.use('/sets', router );