/*
Responsável por criar e gerenciar as rotas.
*/


import { Router } from 'express';
import * as MessageController from './controllers/message.js'

const routes = Router();

routes.get('/', (request, response) => {
    response.send('APT Tech Academy - Integração com o Twilio');
});

routes.post('/message', MessageController.message)

export default routes;