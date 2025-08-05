const express = require('express');
const router = express.Router();
const data = require('../mock/character-classes.mock.json');

/*
    Busca todas as classes
*/
router.get('/', (_,res) => {
    try {
        const classes = data.classes;
        return res.send({ classes });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all Classes' });
    }
});

/*
    Busca de classes por nome
*/
router.get('/:slug', (req,res) => {
    const id = req.params.slug;
    try {
        const selectedClass = data.classes.filter( charClass => charClass.slug === slug );
        if ( selectedClass.length == 1 ){
            return res.send({ classes: selectedClass[0] });
        } else {
            return res.status(400).send({ error: `This class doesn't exist` }); 
        }
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading class' });
    }
});

module.exports = app => app.use('/characters', router );