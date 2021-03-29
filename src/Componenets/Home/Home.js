import React from 'react'
import NavBar from '../CommonComp/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import {Container,Card} from 'react-bootstrap';
import Contact from '../CommonComp/Contact';
import Image from '../../images/man.jpg';

const Home = () => {

  return(
    <div>
    <NavBar/>
  <Container>
   <Card className="bg-dark text-white margins" >
    <Card.Img src={Image} alt="Card image" />
    <Card.ImgOverlay>
    <Card.Title>Hey✋</Card.Title>
    <Card.Text>
    This is a wider card with supporting text below as a natural lead-in to
    additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
    </Card>
   </Container>
    <Contact/>
    </div>
  )
}

export default Home
