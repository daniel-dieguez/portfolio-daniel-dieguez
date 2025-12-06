import React from 'react'
import { FaJsSquare, FaJava, FaGithub, FaReact, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import styles from '../css/tegnologia.module.css'

export default function Tecnologias() {
    return (
        <div>

            <h1 className={styles.principalTitle}>Tecnologias</h1>
            <div className={styles.principalButtons}>
                <p className={styles.btn}><FaJsSquare /> JavaScript</p>
                <p className={styles.btn}><FaReact /> React</p>
                <p className={styles.btn}><FaJava /> Java</p>
                <p className={styles.btn}><TbBrandCSharp /> . Net</p>
                <p className={styles.btn}><SiTypescript /> TypeScript</p>
                <p className={styles.btn}><SiMysql /> MySQL</p>
                <p className={styles.btn}><DiMsqlServer /> SQL Server</p>
                <p className={styles.btn}><FaGithub /> GitHub</p>
                <p className={styles.btn}><FaDocker /> Docker</p>
            </div>


        </div>
    )
}
