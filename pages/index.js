import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Container, Row, Col } from 'reactstrap';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Jumbotron, 
  Button
} from 'reactstrap';

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" dark expand="md">
        <Container>
          <NavbarBrand href="/">João Humberto</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Projetos</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Redes Sociais
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Instagram
                  </DropdownItem>
                  <DropdownItem>
                    Facebook
                  </DropdownItem>
                  <DropdownItem>
                    Twitter
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/">Sobre</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Contato</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
        <Jumbotron className="main">
          <Container>
            <style>
              {
                `.main{
                    padding-bottom: 520px;
                    margin-bottom: 0rem !important;
                }
                .rodape{
                  margin-bottom: 0rem !important;
                  margin-top: 0rem !important;
                  padding-top: 5px;
                  padding-bottom: 5px;
                }`

              }
            </style>
            <img source="./"/>
            <h1 className="display-4  text-center">Hello, world!</h1>
            <p className="lead text-center">João Humberto Silva Ribeiro Júnior</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Sobre</Button> 
            </p>
          </Container>
         
        </Jumbotron>

        <Jumbotron fluid className="rodape bg-info" style={style.rodape}>
          <Container>
            <h1 className="lead text-center" >João Humberto Silva Ribeiro Júnior</h1>
            <h3 className="lead text-center" >E-mail: humberto.junior28@gmail.com || WhatsApp: (98) 984650786</h3>
          </Container>
        </Jumbotron>
      
    </div>
  );
}

const style = ({
  rodape: {
    color: '#FFF',
  },
  main: {
    flexGrow: 1,
    marginBottom: 0
  }
})

export default Home;