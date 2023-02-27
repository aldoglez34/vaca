import { FC, useContext } from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { LanguageContext } from "../../context/langageContext";
import { LanguageSwitch } from "./LanguageSwitch";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Navbar: FC = () => {
  const { displayText } = useContext(LanguageContext);

  return (
    <BootstrapNavbar bg="dark" fixed="top" variant="dark">
      <Container>
        <BootstrapNavbar.Brand href="/">
          <Image
            alt="logo"
            height="30"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWoGMkjZvIiOqLQ1UZNJ_Yj6Sm5EIEOYyf8F-b4aB&s"
            width="30"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/inidio">{displayText("NAV.MENU")[0]}</Nav.Link>
            <Nav.Link href="/sociales">{displayText("NAV.MENU")[1]}</Nav.Link>
            <Nav.Link href="/contacto">{displayText("NAV.MENU")[2]}</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <LanguageSwitch />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
