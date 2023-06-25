import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();
const router = Router();

api.use('/api/', router);

require('./../../controllers/gemsController')(app);
require('./../../controllers/eventsController')(app);
require('./../../controllers/setsController')(app);

export const handler = serverless(api);