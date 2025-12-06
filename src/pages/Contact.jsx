import { React, useState } from 'react'
import style from '../css/contactame.module.css'
// import { Card, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { toast } from 'react-toastify';


export default function Contact() {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
            toast.warning("Por favor completa todos los campos.");
           
            return;
        }

        toast.success("Formulario enviado con éxito");


        setNombre("");
        setCorreo("");
        setMensaje("");
    };

    return (

        <div>
            <h1 className={style.principalTitle}>Contáctame</h1>

            <div >
                <form className={style.formContainer} onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <label htmlFor="correo">Correo</label>
                    <input
                        id="correo"
                        type="email"
                        placeholder="Tu correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />

                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        rows="8"
                        placeholder="Escribe tu mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>


    )
}
