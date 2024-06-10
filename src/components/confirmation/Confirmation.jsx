import { Container, Table, Button, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

if (!window.booking){
    window.booking = {
        first: '',
        last: '',
    }
}

export default function Comfirmation() {
  return (
    <Container>
      <h1 className="display-5 fw-bold text-center">Appointment Confirmation</h1>
      <h4 className="text-center">Thank you {window.booking.first} {window.booking.last} for booking a massage with us! </h4>
      
      <Table hover style={{margin: '20px'}}>
    <thead>
    <tr>
        <th>Package</th>
        <th style={{width: '500px'}} className="text-end" >Date/Time</th>
        <th className="text-center" >Specialist</th>
    </tr>
    </thead>
    <tbody>

  <tr>
    <td className="text-start">{window.package}</td>
    <td className="text-end" >{window.booking.date} @ {window.booking.time}</td>
    <td className="text-center" >{window.specialist}</td>
  </tr>

</tbody>
</Table>
      <Row className='justify-content-center'>
      <h6 className="text-center">We will send an appointment receipt to {window.booking.email} and will remind you by texting {window.booking.phone}. </h6>
      <Button style={{width:'25%'}} variant="outline-light"><Link to="/">Return to Home</Link></Button>
      </Row>

    <Container style={{height:"200px"}}></Container>

    </Container>
  );
}
