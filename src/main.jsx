import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import EventDemo from './EventDemo.jsx'
import DoSumWithError from './doSumWithError.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <EventDemo/>
    <Header/>
    <DoSumWithError/>
  </StrictMode>,
)
