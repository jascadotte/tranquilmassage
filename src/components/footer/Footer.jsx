import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Navbar className="bg-body-tertiary" >
      <Container >
        <Row style={{ width: '100%' }} >
            <Col >
        {/* <img className="mb-2" src="../assets/brand/bootstrap-logo.svg" alt="" width="24" height="19"> */}
        <small className="text-body-secondary">&copy; 2024</small>
        </Col>
        <Col md={3}>
        <h5>Hours</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Monday-Friday: 9am-6pm</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Saturday-Sunday: 11am-5pm</a></li>
        </ul>
        </Col>
        <Col md={3} >
        <h5>Contact Us</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">tranquilmassage@mail.com</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">(123) 456-7890</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">123 Main Street, Ottawa, ON</a></li>
        </ul>
        </Col>
      </Row>
      </Container>
    </Navbar>
  );
}

