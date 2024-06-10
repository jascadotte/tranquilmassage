import { Container, Accordion} from 'react-bootstrap';
import { Link } from "react-router-dom";



export default function Contact() {
  return (
    <Container>

  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-11 mx-auto">
        <h1 className="fw-light">Contact Us</h1>
        <p className="text-body-secondary">(123) 456-7890</p>
        <p className="text-body-secondary">tranquilmassage@mail.com</p>
        <p className="text-body-secondary">At Tranquil Massage, we believe in the power of touch to heal, rejuvenate, and bring balance to your life. Our team of skilled and compassionate specialists are dedicated to providing personalized treatments tailored to meet your unique needs. From full body massages to revitalizing facial massages, we offer a wide range of services designed to promote wellness and tranquility. Step into our serene and calming environment, and let us help you unwind and find your inner peace. Your well-being is our priority, and we are committed to delivering an exceptional experience with every visit.</p>
      </div>
    </div>
  </section>    
  
  <h2>FAQs</h2>

  <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the cost of a personalized package?</Accordion.Header>
        <Accordion.Body>
        Our specialists will tailor a custom package based on your individual needs. Pricing will be discussed during your appointment, or you can contact us in advance for more information.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I book an appointment for someone else?</Accordion.Header>
        <Accordion.Body>
        Absolutely! We can schedule simultaneous appointments for you and another person, provided each individual selects a different specialist.</Accordion.Body>
      </Accordion.Item>
    </Accordion>

  </Container>
  );
}