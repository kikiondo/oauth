import 'materialize-css/dist/css/materialize.min.css' // No regresa nada, por eso no asigno constante.
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'


const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
const root = document.querySelector('#root')

render(
  <Provider store={store}><App/></Provider>, 
  root)