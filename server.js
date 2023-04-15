import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {logger}  from './src/logs/logger.js';
import { options } from './src/config/configuration.js';
import { apiRouter } from './src/router/index.routes.js';

/* ------------------- constantes necesarias del servidor ------------------- */

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = options.server.PORT || 8080;


/* ------------------------------- configuracion del servidor ------------------------------- */
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/api/v1/",apiRouter);


/* --------------------  START server  ------------------- */

app.listen(PORT, ()=> logger.info(`Server listening on port ${PORT}`));