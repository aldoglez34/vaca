import { FC } from "react";
import { Navbar } from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { Footer } from "./components/Footer";

type LayoutProps = {
  children: any;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <Container className="bg-warning" style={{ marginTop: "3.6rem" }} fluid>
      <Container className="py-4 bg-light">{children}</Container>
    </Container>
    <Footer />
  </>
);
