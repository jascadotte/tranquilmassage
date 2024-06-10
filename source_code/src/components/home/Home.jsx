import React from 'react'
import { Link } from "react-router-dom";
import { Button, Card, Row, Col } from 'react-bootstrap';
// import './Home.css'


// js code 


export default function Home() {
  return (
    <>

  <div style={{backgroundSize: "cover", backgroundImage: "url('https://t3.ftcdn.net/jpg/01/12/89/78/360_F_112897820_7zBqUbME9yIoeHNJd2jQbKSLKeF0li8i.jpg')"}} className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
    <div className="col-md-15 p-lg-5 mx-auto my-5">
      <h1 className="display-3 fw-bold">Explore Relaxation</h1>
      <h3 className="fw-normal text-muted mb-3">Soothe, Unwind, Restore</h3>
      <div className="d-flex gap-3 justify-content-center lead fw-normal">
      <Link to="/packages"><Button variant='outline-primary'>Book Massage</Button></Link>
      </div>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  <Row xs={2} md={2} className="g-4">

        <Col key={1}>
          <Card>
          <Card.Body>
            <Card.Img variant="top" style={{ marginBottom:'20px', height: '13rem' }} src="https://www.goodnet.org/photos/620x0/28755_hd.jpg" />
            <Card.Title><h2>Heal Mind & Body</h2></Card.Title>
              <Card.Text>
                Our variety of packages offer a soothing experience ideal for everyone.
              </Card.Text>
              <Link to="/packages"><Button variant='outline-primary'>Explore</Button></Link>
              </Card.Body>
          </Card>
        </Col>

        <Col key={2}>
          <Card>
            <Card.Body>
            <Card.Img variant="top" style={{ marginBottom:'20px', height: '13rem' }} src="https://massaya.ca/cdn/shop/files/massage-couple-en-meme-temps-a-domicile-massaya-duo.webp?v=1713754427&width=1920" />
              <Card.Title><h2>Meet Our Specialists</h2></Card.Title>
              <Card.Text>
                Learn about our massage specialists and select a specific expert today.
              </Card.Text>
              <Link to="/specialists"><Button variant='outline-primary'>Explore</Button></Link>
              </Card.Body>
          </Card>
        </Col>
        
    </Row>

    </>
  )
}