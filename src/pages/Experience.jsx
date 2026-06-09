import React, { useState } from 'react'
import styles from '../css/experiences.module.css'
import experiences from '../data/experiences'
import { VscDebugRestart } from "react-icons/vsc";

export default function Experience() {

  const [activeCard, setActiveCard] = useState(null);

  const handleFlip = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>

        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={styles.cardWrapper}
            onClick={() => handleFlip(exp.id)}
          >

            <div
              className={`${styles.card} ${activeCard === exp.id ? styles.flipped : ''
                }`}
            >

              {/* FRONT */}
              <div className={styles.front}>

                <div className={styles.top}>

                  {/* IMAGE */}
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className={styles.logo}
                  />

                  <h3 className={styles.title}>
                    {exp.role}
                  </h3>

                  <p className={styles.company}>
                    {exp.company}
                  </p>

                  <p className={styles.period}>
                    {exp.period}
                  </p>

                </div>

                {/* TAGS */}
                <div className={styles.tags}>
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={styles.tag}
                    >
                      {tag}
                    </span>
                    
                  ))}
                  <div className={styles.flipHint}>
                  <VscDebugRestart size={13} />
                  ver más
                </div>
                  
                </div>

                

              </div>

              {/* BACK */}

              <div className={styles.back}>
                <h3 className={styles.backTitle}>
                  Experiencia
                </h3>

                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>
                    {exp.description}
                  </p>
                </div>
              </div>




            </div>

          </div>
        ))}

      </div>
    </section>
  )
}