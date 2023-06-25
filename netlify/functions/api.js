import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();
const router = Router();

app.use(require('./../../src/routes/routes'));
require('./../../controllers/gemsController')(app);
require('./../../controllers/eventsController')(app);
require('./../../controllers/setsController')(app);

api.use('/api/', router);

export const handler = serverless(api);