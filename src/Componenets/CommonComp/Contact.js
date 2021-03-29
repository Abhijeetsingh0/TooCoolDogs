import React from 'react'
import './Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Jumbotron} from 'react-bootstrap';

const Contact = () => {
    return (
    <div className="Bottom">        
    <Jumbotron fluid className="Bottom" style={{color:'white'}}>
        <Container>
            <h1>Contact detail:- </h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
    </Jumbotron>
    </div>
    )
}

export default Contact
