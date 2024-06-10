import {useState} from 'react';
import {Container, Form, Row, Col, Button, Alert} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";


export default function Booking() {

  const [timeChoice, setTimeChoice] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();    //   e.stopPropagation();
    const formData = new FormData(e.target);
    window.booking = Object.fromEntries(formData.entries());
  //   console.log(e.target);
    // Check if data all OK?
    window.booking.time = timeChoice || '9am';
    console.log(window.booking);

    navigate("/confirmation");

  }

  const handleTime = (e) => {
      console.log(e.target.value)
      setTimeChoice(e.target.value);
    }

  if(window.package && window.specialist){

  return (
    <Container>

      <h2>Reserve Your Session</h2>
      <Form onSubmit={handleSubmit} style={{marginTop:"30px"}}>
      <Alert variant='primary'> You are booking the {window.package} Package with {window.specialist}.    </Alert>
      <Row>
        <Col>
            <Form.Group className="mb-3" >
                <Form.Label>First Name</Form.Label>
                <Form.Control as="textarea" name="first" rows={1} />
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control as="textarea" name="last" rows={1} />
            </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="email"/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="(000) 000-0000" name="phone"/>
        </Form.Group>
      </Row>
      <Row>
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>Choose Date</Form.Label>
                <Form.Control type="date" name="date" />
            </Form.Group>
        </Col>
              <Col>
              <Form.Group className="mb-3">
            <Form.Label>Select Time</Form.Label>
            <Form.Select onChange={handleTime}>
                <option>9am</option>
                <option>10am</option>
                <option>11am</option>
                <option>1pm</option>
                <option>2pm</option>
                <option>3pm</option>
                <option>4pm</option>
                <option>5pm</option>
            </Form.Select>
            <Form.Control as="select" name="time" />
            </Form.Group>
        </Col>
      </Row>

      <Row>
        <Form.Group className="mb-3">
            <Form.Label>Additional Comments</Form.Label>
            <Form.Control as="textarea" name="comments"/>
        </Form.Group>
      </Row>

      <Button variant="outline-primary" type="submit">Submit</Button>
      </Form>
      
    </Container>
  );
  }
  else {
    return(
      <Alert variant='danger'> Please select a package and specialist.</Alert>
    );
  }
}
