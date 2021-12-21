import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from '../node_modules/react-router-dom/index';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
