import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ChakraUI from './components/chakraUI.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraUI>
      <App />
    </ChakraUI>
  </React.StrictMode>
)
