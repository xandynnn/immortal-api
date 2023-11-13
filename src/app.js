const express = require('express');
const routes = express.Router();
const app = express();
const port = 3000;

app.use(routes);

require('./controllers/gemsController')(app);
require('./controllers/eventsController')(app);
require('./controllers/setsController')(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});