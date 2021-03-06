const http = require('http');
const { Server } = require('socket.io');

const app = require('./app');
const { Message } = require('./models');

const httpServer = http.createServer(app);

const io = new Server(httpServer);

const CHAT_EVENTS = {
  NEW_MESSAGE: 'NEW_MESSAGE',
  NEW_MESSAGE_ERROR: 'NEW_MESSAGE_ERROR'
};

io.on('connect', socket => {
  socket.on(CHAT_EVENTS.NEW_MESSAGE, async messageBody => {
    const newMessageBody = JSON.parse(messageBody);

    try {
      const newMessageInstance = await Message.create(newMessageBody);
      io.emit(CHAT_EVENTS.NEW_MESSAGE, JSON.stringify(newMessageInstance));
    } catch (error) {
      io.emit(CHAT_EVENTS.NEW_MESSAGE_ERROR, JSON.stringify(error));
    }
  });
});

const PORT = 5000;
httpServer.listen(PORT, () => { console.log('Server is running'); });
