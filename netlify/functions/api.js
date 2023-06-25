import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();
const router = Router();

api.use('/api/', router);

require('./../../controllers/gemsController')(api);
require('./../../controllers/eventsController')(api);
require('./../../controllers/setsController')(api);

export const handler = serverless(api);