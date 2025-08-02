import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import EventDemo from './EventDemo.jsx'
import DoSumWithError from './doSumWithError.jsx'
import HooksDemo from './HooksDemo.jsx'
import DoSumHooks from './DoSumHooks.jsx'
import LoginPage from './LoginPage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <EventDemo/>
    <Header/>
    <HooksDemo/>
    <DoSumHooks/> */}
    <LoginPage/>

  </StrictMode>,
)
