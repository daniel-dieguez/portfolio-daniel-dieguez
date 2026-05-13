import React, { useEffect, useState } from 'react'
import style from '../css/intro.module.css'

export default function Intro({ onFinish }) {
  const [fase, setFase] = useState('entrada')

  useEffect(() => {
    const timerSalida = setTimeout(() => setFase('salida'), 1800)
    const timerFin = setTimeout(() => onFinish(), 2500)
    return () => {
      clearTimeout(timerSalida)
      clearTimeout(timerFin)
    }
  }, [onFinish])

  return (
    <div className={`${style.overlay} ${fase === 'salida' ? style.saliendo : ''}`}>
      <h1 className={style.titulo}>Bienvenido</h1>
    </div>
  )
}