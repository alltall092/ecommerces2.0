import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'
import 'bootswatch/dist/minty/bootstrap.min.css';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)