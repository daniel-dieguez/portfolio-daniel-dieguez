import React from 'react'
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default function Navbar() {
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink href="#principal" active>
                        Inicio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#sobreMi">Sobre Mi</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#proyectos">Proyecto</NavLink>
                </NavItem>

            </Nav>
        </div>
    )
}
