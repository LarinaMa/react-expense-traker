import React from 'react'
import ReactDOM from 'react-dom/client'
import { ExpensesProvider } from './Context.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpensesProvider>
      <App />
    </ExpensesProvider>
  </React.StrictMode>
)
// function App(){
//   return 'Hello!'
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
