import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Navbar() {
  return (
    <Nav pills className="justify-content-center">
      <NavItem>
        <NavLink href="#principal">Inicio</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#sobreMi">Sobre mí</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#tecnologias">Tecnologías</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#proyectos">Proyectos</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contacto">Contacto</NavLink>
      </NavItem>
    </Nav>
  );
}
