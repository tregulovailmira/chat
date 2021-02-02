import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik, Form, Field } from 'formik';
import * as chatActionCreators from './actions/chatActionCreators';

function App () {
  const { messages, error, isFetching } = useSelector(state => state.chat);
  const dispatch = useDispatch();
  const { getMessagesAction, newMessagesAction } = bindActionCreators(chatActionCreators, dispatch);

  useEffect(() => {
    getMessagesAction();
  }, []);
  return (
    <div>
      <Formik initialValues={{ text: '' }} onSubmit={values => newMessagesAction(values)}>
        {formik =>
        <Form>
          <Field name='text'/>
          <button type='submit'>Send</button>
        </Form>}
      </Formik>
      <ol>
        {messages.map(m => <li key={m._id}>{m.text}</li>)}
        {isFetching && <li>Loading...</li>}
        {error && <li>ERROR</li>}
      </ol>
    </div>
  );
}

export default App;
