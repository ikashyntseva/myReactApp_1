import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import App from './containers/App'

import registerServiceWorker from './registerServiceWorker'

import './styles/App.css'

ReactDOM.render(
  <Provider store={store}>
    <div className="app">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
