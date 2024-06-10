import { ListGroup, Table, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from "react-router-dom";

const alertClicked = () => {
    alert('You selected...');
  };

function Packages() {

  const navigate = useNavigate();
  window.package = '';

  function handleClick(pkg) {
    window.package = pkg;
    if(window.specialist){
        navigate(`/booking`);
    }
    else {
        navigate('/specialists');
    }
  }


  return (
    <>

    <section className="py-5 text-center container">
        <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Massage Packages</h1>
            <p className="lead text-body-secondary">Whether you are seeking relief or treating yourself to a moment of tranquility, our packages are here to cater to your needs.</p>
            <p className="lead text-body-secondary">Explore and select from our exclusive packages below.</p>
        </div>
        </div>
    </section>

      <Table hover style={{margin: '20px'}}>
      <thead>
        <tr>
          <th>Select Package</th>
          <th style={{width: '500px'}} className="text-end" >Includes</th>
          <th className="text-center" >Price</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          {/* <td onClick={() => window.pid='Peaceful'}><Link to="/specialists/Peaceful">Peaceful</Link></td> */}

          <td><Button size="sm" onClick={() => handleClick('Peaceful')} variant="outline-primary">Peaceful</Button></td>
          <td className="text-end" >Back (60 min)</td>
          <td className="text-center" >$100</td>
        </tr>

        <tr>
          <td><Button size="sm" onClick={() => handleClick('Serenity')} variant="outline-primary">Serenity</Button></td>
          <td className="text-end" >Back (60 min), Facial (30 min)</td>
          <td className="text-center" >$150</td>
        </tr>

        <tr>
          <td><Button size="sm" onClick={() => handleClick('Tranquility')} variant="outline-primary">Tranquility</Button></td>
          <td className="text-end" >Back (60 min), Facial (30 min), Foot (30 min)</td>
          <td className="text-center" >$200</td>
        </tr>

        <tr>
          <td><Button size="sm" onClick={() => handleClick('Escape')} variant="outline-primary">Escape</Button></td>
          <td className="text-end" >Full Body (90 min)</td>
          <td className="text-center" >$250</td>
        </tr>

        <tr>
          <td><Button size="sm" onClick={() => handleClick('Dream')} variant="outline-primary">Dream</Button></td>
          <td className="text-end" >Full Body (90 min), Facial (30 min), Foot (30 min)</td>
          <td className="text-center" >$300</td>
        </tr>

        <tr>
          <td><Button size="sm" onClick={() => handleClick('Complete')} variant="outline-primary">Complete</Button></td>
          <td className="text-end" >Full Body (90 min), Facial/Scalp (60 min), Foot/Hand (60 min)</td>
          <td className="text-center" >$400</td>
        </tr>

        <tr>
          <td><Button size="sm" onClick={() => handleClick('Personalized')} variant="outline-primary">Personalized</Button></td>
          <td className="text-end" >...</td>
          <td className="text-center" >...</td>
        </tr>

      </tbody>
    </Table>

    <Button variant="outline-light"><Link to="/specialists">Go to Specialists</Link></Button>

    </>
  );
}



export default Packages;