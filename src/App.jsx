import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import style from './css/app.module.css'

import Principal from './pages/Principal'
import SobreMi from './pages/SobreMi'
import Tecnologias from './pages/Tecnologias'
import Proyectos from './pages/Proyectos'
import Navbar from './component/Navbar'
// import ScrollTop from './component/ScrollTop'
import Contact from './pages/Contact'
import Snowfall from 'react-snowfall';

export default function App() {
  return (
    <div className={style.appContainer}>
      <Snowfall
        snowflakeCount={120}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 1,
        }}
      />
      <div className={style.navbarFixed}>
        <Navbar />
      </div>
      
      <main>
        <div id="principal" className={style.section}>
          <Principal />
        </div>

        <div id="sobreMi" className={style.section}>
          <SobreMi />
        </div>

        <div id="tecnologias" className={style.section}>
          <Tecnologias />
        </div>

        <div id="proyectos" className={style.section}>
          <Proyectos />
        </div>

        <div id="contacto" className={style.section}>
          <Contact />
        </div>
      </main>

    </div>
  )
}
