import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import style from './css/app.module.css'

import Principal from './pages/Principal'
import SobreMi from './pages/SobreMi'
import Tecnologias from './pages/Tecnologias'
import Proyectos from './pages/Proyectos'
// import Navbar from './component/Navbar'
// import ScrollTop from './component/ScrollTop'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className={style.appContainer}>
      {/* <Navbar /> */}
      <main>
        <div className={style.section}>
          <Principal />
        </div>
        <div className={style.section}>
          <SobreMi />
        </div>
        <div className={style.section}>
          <Tecnologias />
        </div>
        <div className={style.section}>
          <Proyectos />
        </div>
        <div className={style.section}>
          <Contact />
        </div>
      </main>
    </div>
  )
}
