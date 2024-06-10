import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//Avoid using a gigant css file. Instead, using local scoping css
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

