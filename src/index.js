import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {createStore,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import logger from 'redux-logger'

const store = createStore(
    middleware,
    reducer,
    applyMiddleware(logger)
  )
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'))