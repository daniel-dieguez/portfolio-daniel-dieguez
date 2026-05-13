import { useEffect, useRef, useState } from "react";
import {
  Navbar as NavbarRS,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Navbar() {
  
   const [isOpen, setIsOpen] = useState(false);



  const navbarRef = useRef(null);

  const toggle = () => setIsOpen(!isOpen);

  const toggleClose =() => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);



  return (
    <div ref={navbarRef}>
      <NavbarRS expand="md" dark className="px-3">
        
      
      <NavbarToggler onClick={toggle} />

     
      <Collapse isOpen={isOpen} navbar>
        <Nav
          pills
          className="ms-auto w-100 justify-content-center"
          navbar
        >
          <NavItem >
            <NavLink href="#principal" onClick={toggleClose}>Inicio</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#sobreMi" onClick={toggleClose}>Sobre mí</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#tecnologias" onClick={toggleClose}>Tecnologías</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#proyectos" onClick={toggleClose}>Proyectos</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#contacto" onClick={toggleClose}>Contacto</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </NavbarRS>


    </div>
    
  );
}