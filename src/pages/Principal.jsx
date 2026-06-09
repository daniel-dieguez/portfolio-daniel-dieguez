import React, { useState, useRef } from 'react'
// import {} from 'reactstrap'
// import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import styles from '../css/principal.module.css';
import cvEs from '../docs/DanielDieguezEs.pdf'
// import cvEn from '../docs/DanielDieguezEn.pdf'


export default function Principal() {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  // ------------
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  const handleDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setProgress(0);
    setDone(false);

    // Dispara la descarga real
    const link = document.createElement('a');
    link.href = cvEs;
    link.download = 'DanielDieguezEs.pdf';
    link.click();

    // Simula el progreso visual
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 4 + 1.5;
        if (next >= 100) {
          clearInterval(intervalRef.current);
          setDone(true);
          setTimeout(() => {
            toggle();
            setDownloading(false);
            setDone(false);
            setProgress(0);
          }, 1500);
          return 100;
        }
        return next;
      });
    }, 80);
  };




  return (

    <div>
      <h1 className={styles.principalTitle}>Daniel Dieguez</h1>

      <h2 className={styles.principalSubtitle}>Full Stack Developer</h2>

      <p className={styles.principalDescription}>
        Especializado en automatización de procesos y optimización de rendimiento en sistemas a la medida del usuario.
      </p>

      <div className={styles.principalButtons}>
        <a href="https://wa.link/qd9q8w" className={styles.btnwhats}>
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

        {/* <div style={{ marginTop: '10px' }}> */}
        <button onClick={toggle} className={styles.btn}>
          <FaArrowDown /> Descargar CV
        </button>

        {/* <button className={styles.btn} onClick={toggle}>Descar CV</button> */}
        {/* </div> */}

      </div>

      {modal && (
        <div className={styles.modalOverlay} onClick={toggle}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>

            <button className={styles.modalClose} onClick={toggle}>✕</button>



            <h2 className={styles.modalTitle}>Descargar CV</h2>
            <p className={styles.modalDesc}>
              Disponible en español. Incluye experiencia, proyectos y tecnologías.
            </p>

            {/* <a href={cvEs} download="DanielDieguezEs.pdf" onClick={toggle}>
              <button className={styles.modalBtnPrimary}>
                Descargar PDF
              </button>
             */}
            <a href={cvEs} download="DanielDieguezEs.pdf" > 
            <button
              className={styles.modalBtnPrimary}
              onClick={handleDownload}
              disabled={downloading}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* Relleno de agua */}
              {downloading && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0, left: 0,
                    width: '100%',
                    height: `${progress}%`,
                    background: done
                      ? 'rgba(60, 200, 130, 0.22)'
                      : 'rgba(60, 130, 255, 0.28)',
                    transition: 'background 0.4s',
                    zIndex: 0,
                  }}
                />
              )}

              {/* Texto encima del agua */}
              <span style={{ position: 'relative', zIndex: 1 }}>
                {!downloading && 'Descargar PDF'}
                {downloading && !done && `${Math.round(progress)}%`}
                {done && '✓ Descargado'}
              </span>
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
