import ACTION_TYPES from './types';

export const getMessagesAction = () => ({
  type: ACTION_TYPES.GET_MESSAGES_ACTION
});
export const getMessagesRequest = () => ({
  type: ACTION_TYPES.GET_MESSAGES_REQUEST
});

export const getMessagesSuccess = (data) => ({
  type: ACTION_TYPES.GET_MESSAGES_SUCCESS,
  payload: { data }
});

export const getMessagesFail = (error) => ({
  type: ACTION_TYPES.GET_MESSAGES_FAIL,
  payload: { error }
});

export const newMessageAction = (data) => ({
  type: ACTION_TYPES.NEW_MESSAGE_ACTION,
  pauload: { data }
});

export const newMessageSuccess = (data) => ({
  type: ACTION_TYPES.NEW_MESSAGE_SUCCESS,
  payload: { data }
});

export const newMessageFail = (error) => ({
  type: ACTION_TYPES.NEW_MESSAGE_FAIL,
  payload: { error }
});
