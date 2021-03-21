import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {initialState} from './initialState';
import logger from 'redux-logger';
import { reducer as tasksReducer } from '../redux/tasksRedux'


// import reducers

// combine reducers
const reducers = {
  tasks: tasksReducer
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

export default store;