const express = require('express');
const routes = express.Router();
const app = express();
const port = 3000;

app.use(routes);

require('./controllers/gemsController')(app);
require('./controllers/eventsController')(app);
require('./controllers/setsController')(app);
require('./controllers/videosController')(app);
require('./controllers/fishController')(app);
require('./controllers/championshipController')(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${port}`);
});