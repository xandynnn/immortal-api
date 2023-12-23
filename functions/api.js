const express = require('express');
const serverless = require('serverless-http')
const cors = require('cors');
const routes = express.Router();

const dataGems = require('../src/mock/gems.mock.json');
const dataEvents = require('../src/mock/events.mock.json');
const dataSets = require('../src/mock/gear-sets.mock.json');
const dataCorvus = require('../src/mock/corvus.mock.json');
const dataVideos = require('../src/mock/videos.mock.json');

const app = express();
app.use(cors({origin: '*'}));
app.use('/api', routes);

/*
    Busca todas as gemas
*/
routes.get('/gems', (req,res) => {
    console.log('oi')
    try {
        const gems = dataGems.gems;
        return res.send({ gems });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all gems' });
    }
});

/*
    Busca de gemas por slug
*/
routes.get('/gems/:gemSlug', (req,res) => {
    const gemSlug = req.params.gemSlug;
    try {
        const gem = dataGems.gems.filter( gem => gem.slug === gemSlug );
        if ( gem.length == 1 ){
            return res.send({ gem: gem[0] });
        } else {
            return res.status(400).send({ error: `This gem doesn't exist` }); 
        }
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading gem' });
    }
});

/*
    Busca todos os sets
*/
routes.get('/sets', (req,res) => {
    try {
        const sets = dataSets.sets;
        return res.send({ sets });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all sets' });
    }
});

/*
    Busca de Set por slug
*/
routes.get('/sets/:setSlug', (req,res) => {
    const setSlug = req.params.setSlug;
    try {
        const set = dataSets.sets.filter( set => set.slug === setSlug );
        if ( set.length == 1 ){
            return res.send({ set: set[0] });
        } else {
            return res.status(400).send({ error: `This set doesn't exist` }); 
        }
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading set' });
    }
});

/*
    Busca todos os eventos
*/
routes.get('/events', (req,res) => {
    try {
        const events = dataEvents.events;
        return res.send({ events });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all events' });
    }
});

/*
    Busca de eventos por slug
*/
routes.get('/events/:eventSlug', (req,res) => {
    const eventSlug = req.params.eventSlug;
    try {
        const selectedEvent = dataEvents.events.filter( event => event.slug === eventSlug );
        if ( selectedEvent.length == 1 ){
            return res.send({ event: selectedEvent[0] });
        } else {
            return res.status(400).send({ error: `This event doesn't exist` }); 
        }
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading event' });
    }
});

/*
    Busca de perguntas de corvus
*/
routes.get('/corvus', (req,res) => {
    try {
        const corvus = dataCorvus.questions;
        return res.send({ corvus });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all corvus questions' });
    }
});

/*
    Busca todos os videos
*/
routes.get('/videos', (req,res) => {
    try {
        const videos = dataVideos.videos;
        return res.send({ videos });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading videos' });
    }
});

module.exports.handler = serverless(app)
