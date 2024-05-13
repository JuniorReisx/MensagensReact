import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './Header.jsx'
import { Formulario } from './Formulario.jsx'
import { Footer } from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Formulario />
    <Footer />
  </React.StrictMode>,
)
