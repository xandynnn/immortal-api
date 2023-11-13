const express = require('express');
const router = express.Router();
const data = require('../mock/corvus.mock.json');

function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

router.get('/', (req, res) => {
    try {
        const searchTerm = req.query.searchTerm;
        const corvus = data.corvus;

        if (searchTerm) {
            const searchTermNormalized = removeAccents(searchTerm.toLowerCase());

            // Filtra os eventos com base no termo de busca original e no termo normalizado
            const filteredCorvus = corvus.filter(event => {
                const eventNameNormalized = removeAccents(event.name.toLowerCase());
                return eventNameNormalized.includes(searchTermNormalized) || event.name.toLowerCase().includes(searchTerm.toLowerCase());
            });

            return res.send({ corvus: filteredCorvus });
        } else {
            return res.send({ corvus });
        }
    } catch (err) {
        return res.status(400).send({ error: 'Error to loading all events' });
    }
});

module.exports = app => app.use('/corvus', router);
