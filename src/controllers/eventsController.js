const express = require('express');
const router = express.Router();
const data = require('../mock/events.mock.json');

/*
    Busca todos os eventos
*/
router.get('/', (req,res) => {
    try {
        const events = data.events;
        return res.send({ events });
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all events' });
    }
});

/*
    Busca de eventos por slug
*/
router.get('/:eventSlug', (req,res) => {
    const eventSlug = req.params.eventSlug;
    try {
        const selectedEvent = data.events.filter( event => event.slug === eventSlug );
        if ( selectedEvent.length == 1 ){
            return res.send({ event: selectedEvent[0] });
        } else {
            return res.status(400).send({ error: `This event doesn't exist` }); 
        }
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading event' });
    }
});

module.exports = app => app.use('/events', router );