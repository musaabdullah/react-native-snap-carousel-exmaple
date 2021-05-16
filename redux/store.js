import {compose, applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
