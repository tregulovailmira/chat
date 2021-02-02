import axios from 'axios';
import { io } from 'socket.io-client';
import { newMessageFail, newMessageSuccess } from '../actions/chatActionCreators';
import store from '../store';

// ws

const wsBaseURL = 'ws://localhost:5000';
const socket = io(wsBaseURL);

const CHAT_EVENTS = {
  NEW_MESSAGE: 'NEW_MESSAGE',
  NEW_MESSAGE_ERROR: 'NEW_MESSAGE_ERROR'
};

socket.on(CHAT_EVENTS.NEW_MESSAGE, body => {
  const data = JSON.parse(body);
  store.dispatch(newMessageSuccess(data));
});

socket.on(CHAT_EVENTS.NEW_MESSAGE_ERROR, error => {
  const err = JSON.parse(error);
  store.dispatch(newMessageFail(err));
});

// http
const apiInstance = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getMessages = () => {
  apiInstance.get('/messages');
};

export const sendMessage = (data) => {
  apiInstance.socket.emit(CHAT_EVENTS.NEW_MESSAGE, JSON.stringify(data));
};
