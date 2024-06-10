import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default function Specialists() {

    const navigate = useNavigate();
    window.specialist = '';
  
    function handleClick(spt) {
      window.specialist = spt;
      if(window.package){
          navigate(`/booking`);
      }
      else {
          navigate('/packages');
      }
    }

  return (
    <Container>

  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-11 mx-auto">
        <h1 className="fw-light">Meet Our Specialists</h1>
        <p className="text-body-secondary">Select one of our experienced specialists below and begin your journey to tranquility today.</p>
      </div>
    </div>
  </section>

  {/* <form action="/action_page.php">
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday"/>
    <input type="submit"/>
  </form> */}

  <Row xs={2} md={2} className="g-4">


        <Col key={1}>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/R.b1b463303db368fd76ad68356d1d4f0c?rik=lY2e9ubl6ESqZg&pid=ImgRaw&r=0" />
            <Card.Body>
              <Card.Title>Rachel</Card.Title>
              <Card.Text>
                10 years of experience with focus on holistic practices.
              </Card.Text>
              <Button onClick={() => handleClick('Rachel')} variant="outline-primary">Select</Button>
              </Card.Body>
          </Card>
        </Col>

        <Col key={2}>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/R.b1b463303db368fd76ad68356d1d4f0c?rik=lY2e9ubl6ESqZg&pid=ImgRaw&r=0" />
            <Card.Body>
              <Card.Title>George</Card.Title>
              <Card.Text>
                15 years of experience, specializing in foot massages.
              </Card.Text>
              <Button onClick={() => handleClick('George')} variant="outline-primary">Select</Button>
              </Card.Body>
          </Card>
        </Col>

        <Col key={3}>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/R.b1b463303db368fd76ad68356d1d4f0c?rik=lY2e9ubl6ESqZg&pid=ImgRaw&r=0" />
            <Card.Body>
              <Card.Title>Sonya</Card.Title>
              <Card.Text>
                7 years of experience in Swedish body and facial massage.
              </Card.Text>
              <Button onClick={() => handleClick('Sonya')} variant="outline-primary">Select</Button>
              </Card.Body>
          </Card>
        </Col>

        <Col key={4}>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/R.b1b463303db368fd76ad68356d1d4f0c?rik=lY2e9ubl6ESqZg&pid=ImgRaw&r=0" />
            <Card.Body>
              <Card.Title>Barbara</Card.Title>
              <Card.Text>
                16 years of experience, specializing in facial massages.
              </Card.Text>
              <Button onClick={() => handleClick('Barbara')} variant="outline-primary">Select</Button>
              </Card.Body>
          </Card>
        </Col>

    </Row>
      
    <Button variant="outline-light"><Link to="/packages">Go to Packages</Link></Button>

    </Container>
  );
}
