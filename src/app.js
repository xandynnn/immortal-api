const express = require('express');
import serverless from 'serverless-http';
const app = express();
const port = 3000;

app.use(require('./routes/routes'));
require('./controllers/gemsController')(app);
require('./controllers/eventsController')(app);
require('./controllers/setsController')(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${port}`);
});

export const handler = serverless(app);