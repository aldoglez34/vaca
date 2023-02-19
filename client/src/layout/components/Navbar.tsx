import { FC, useContext } from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { LanguageContext } from "../../context/langageContext";
import { LanguageSwitch } from "./LanguageSwitch";

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
            <Nav.Link href="/inidio">{displayText("nav.menu")[0]}</Nav.Link>
            <Nav.Link href="/sociales">{displayText("nav.menu")[1]}</Nav.Link>
            <Nav.Link href="/contacto">{displayText("nav.menu")[2]}</Nav.Link>
            <LanguageSwitch />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
