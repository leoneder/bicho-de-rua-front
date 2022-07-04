import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import './cards/NavBarStyle.css';
function Nav1(props){
       return(

       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="nav1" href="www.google.com" >Bicho de Rua                    </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-novo-bicho" href="#home">          Novo Bicho</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

       );
}

export default Nav1;