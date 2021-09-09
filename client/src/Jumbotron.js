import React, { Component } from 'react';
import './Jumbotron.css';
import Jumbotron from 'react-bootstrap/Jumbotron';


class Jumbo extends Component {

    
    render() {
        return (
            <React.Fragment>
            <Jumbotron className = "jumbo mb-0" fluid>
          
          </Jumbotron>
            <div className = 'jumbo-content'>
            <h1>DAVID</h1>
            <p>
            A non-profit NGO based in Uttarakhand, NGO works with top Indian experts and engineers with varied interests and expertise in the field of education; 
            </p>
        </div>
        </React.Fragment>
        )
    }
}

export default Jumbo;