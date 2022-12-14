import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import auth from './auth'
import messages from './messages';
import onlineUsers from './onlineUsers';
import axios from 'axios';

const reducer = combineReducers({ auth, messages, onlineUsers })
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './messages'
export * from './onlineUsers'
