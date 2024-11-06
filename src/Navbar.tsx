import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Minerva-Juppiter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Schedule">Schedule</Nav.Link>
            <Nav.Link href="/Works">Works</Nav.Link>
            <NavDropdown title="SNS" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.twitter.com/mjuppiter">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="https://instagram.com/minerva_juppiter">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="https://bsky.app/profile/minerva-juppiter.bsky.social">BlueSky</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/Blog'>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;