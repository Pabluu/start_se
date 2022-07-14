/*
Responsável por mandar o sms de acordo com as informações passadas pelo JSON
*/

import * as MessageService from '../services/message.js';

async function message(request, response) {
    const { message, phoneNumber } = request.body;

    try {
        const responseMessage = await MessageService.sendMessage(message, phoneNumber);
        response.send(responseMessage);
    } catch (error) {
        response.status(error.status).send(error);
    }
}

export { message }