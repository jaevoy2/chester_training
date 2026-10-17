import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'
import './inner.css'
import './testimonials.css'
import './senior.css'
import './golf.css'
import './semi.css'
import './corporate.css'
import './lehigh.css'
import './contact.css'
import './hero-mobile.css'
import notifyVisit from './notifyVisit.js'

notifyVisit()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
