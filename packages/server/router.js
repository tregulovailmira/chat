const { Router } = require('express');
const messagesRouter = require('./routers/messagesRouter');

const router = Router();

router.use('/messages', messagesRouter);

module.exports = router;
