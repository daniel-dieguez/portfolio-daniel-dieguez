import React from 'react'
import style from '../css/proyectos.module.css'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import proyectos from '../data/proyectos'

export default function Proyectos() {
    return (
        <div >
            <h1 className={style.principalTitle}>Proyectos</h1>

            <div className={style.projectsGrid}>
                {proyectos.map((proyecto) => (
                    <CardGroup key={proyecto.id} className={style.cardGroup}>
                        <Card className={style.card} >
                            <CardImg
                                top
                                width="100%"
                                src={proyecto.image}
                                alt={proyecto.tittle}
                                className={style.cardImg}
                            />
                            <CardBody className={style.cardBody}>
                                <CardTitle tag="h2" className={style.cardTitle}>
                                    {proyecto.tittle}
                                </CardTitle>

                                <CardSubtitle tag="p" className={style.cardDescription}>
                                    {proyecto.description}
                                </CardSubtitle>
                                <CardSubtitle tag="h6" className={style.cardTech}>
                                    {proyecto.technologies.join(", ")}
                                </CardSubtitle>
                                <CardSubtitle tag="h6" className={style.cardStatus}>
                                    {proyecto.avances}
                                </CardSubtitle>

                                <a
                                    href={proyecto.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={style.btn}
                                >
                                    {proyecto.status === 1 ? "Demo" : "Visualizar"}

                                </a>
                            </CardBody>
                        </Card>
                    </CardGroup>
                ))}
            </div>
        </div>


    )
}
