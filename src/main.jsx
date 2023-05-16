import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  
import { Provider } from 'react-redux/es/exports.js'
import store from './redux/app/store.js'
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    document.getElementById("root")
  </React.StrictMode>,
)
