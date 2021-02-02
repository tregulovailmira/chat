const { Router } = require('express');
const { messageController } = require('../controllers');

const messagesRouter = Router();

messagesRouter.route('/').get(messageController.getMany);

module.exports = messagesRouter;
