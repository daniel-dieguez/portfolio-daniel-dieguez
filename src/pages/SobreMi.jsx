import React from 'react'
import style from '../css/forme.module.css'

export default function SobreMi() {

    return (
        <div>
            <h2 className={style.principalTitle}>Sobre mi</h2>
            <p className={style.principalDescription}>
                Mi nombre es Daniel Dieguez, soy de Guatemala y actualmente trabajo como Desarrollador Full Stack con 3 años de experiencia en el desarrollo de aplicaciones web modernas y escalables.
            </p>


            <p className={style.principalDescription}>
                Me apasiona automatizar procesos y mejorar el rendimiento de los desarrollos en los que trabajo. Creo firmemente que la eficiencia y la calidad del código son fundamentales para crear productos excepcionales que generen valor real.
            </p>
            <p className={style.principalDescription}>
                En el frontend, trabajo principalmente con React.js y TypeScript, creando interfaces de usuario intuitivas y responsivas. Para el backend, utilizo Java, desarrollando APIs robustas y servicios escalables. Tengo experiencia trabajando con bases de datos como SQL Server y MySQL.
            </p >
            <p className={style.principalDescription}>
                Fuera del código, disfruto la actividad física, ya que me ayuda a mantener disciplina y enfoque, cualidades que aplico tanto en mi vida personal como profesional. Creo que un equilibrio saludable entre mente y cuerpo es esencial para el éxito a largo plazo.
            </p>
        </div >
    )
}
