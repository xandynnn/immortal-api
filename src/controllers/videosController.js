const express = require('express');
const router = express.Router();
const data = require('../mock/videos.mock.json');

/*
    Busca todos os sets
*/
router.get('/', (req,res) => {
    try {
        const videos = data.videos;
        return res.send({ videos });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading videos' });
    }
});

module.exports = app => app.use('/videos', router );