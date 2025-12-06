import React from 'react'
import { FaInstagram,FaWhatsapp,FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import styles from '../css/principal.module.css';


export default function Principal() {
  return (
    
    <div>

      <h1 className={styles.principalTitle}>Daniel Dieguez</h1>

      <h2 className={styles.principalSubtitle}>Full Stack Developer</h2>

      <p className={styles.principalDescription}>
        Desarrollador apasionado por crear soluciones eficientes y escalables.
        Especializado en automatización de procesos y optimización de rendimiento.
      </p>

      <div className={styles.principalButtons}>
        
        <a href="https://wa.me/50200000000" className={styles.btn}>
          <FaWhatsapp /> WhatsApp
        </a>

        <a href="https://www.instagram.com/daniel_dieguez_/" className={styles.btn}>
          <FaInstagram /> Instagram
        </a>

        <a href="mailto:danguez2001@gmail.com" className={styles.btn}>
          <BiLogoGmail /> Email
        </a>

        <a href="https://github.com/daniel-dieguez" className={styles.btn}>
          <FaGithub /> GitHub
        </a>

      </div>
    </div>
  )
}
