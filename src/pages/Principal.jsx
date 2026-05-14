import React, { useState } from 'react'
// import {} from 'reactstrap'
// import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import styles from '../css/principal.module.css';
import cvEs from '../docs/DanielDieguezEs.pdf'
// import cvEn from '../docs/DanielDieguezEn.pdf'


export default function Principal() {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);



  return (

    <div>
      <h1 className={styles.principalTitle}>Daniel Dieguez</h1>

      <h2 className={styles.principalSubtitle}>Full Stack Developer</h2>

      <p className={styles.principalDescription}>
        Especializado en automatización de procesos y optimización de rendimiento en sistemas a la medida del usuario.
      </p>

      <div className={styles.principalButtons}>
        <a href="https://wa.link/qd9q8w" className={styles.btn}>
          <FaWhatsapp /> Contactame
        </a>

        <a href="https://www.instagram.com/daniel_dieguez_/" className={styles.btn}>
          <FaInstagram /> Echa un vistazo
        </a>

        <a
          href="mailto:danguez2001@gmail.com?subject=Contacto desde mi portafolio&body=Hola Daniel,%0D%0A%0D%0AMe gustaría ponerme en contacto contigo para desarrollar un proyecto."
          className={styles.btn}
        >
          <BiLogoGmail /> Comunicación por Email
        </a>

        <a href="https://github.com/daniel-dieguez" className={styles.btn}>
          <FaGithub /> GitHub
        </a>

        <div style={{ marginTop: '10px' }}>
        <button className={styles.btn} onClick={toggle}>Descar CV</button>
      </div>

      </div>
      
      {modal && (
        <div className={styles.modalOverlay} onClick={toggle}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>

            <button className={styles.modalClose} onClick={toggle}>✕</button>



            <h2 className={styles.modalTitle}>Descargar CV</h2>
            <p className={styles.modalDesc}>
              Disponible en español. Incluye experiencia, proyectos y tecnologías.
            </p>

            <a href={cvEs} download="DanielDieguezEs.pdf" onClick={toggle}>
              <button className={styles.modalBtnPrimary}>
                Descargar PDF
              </button>
            </a>

            <button className={styles.modalBtnSecondary} onClick={toggle}>
              Cancelar
            </button>

          </div>
        </div>
      )}

    </div >
  )
}
