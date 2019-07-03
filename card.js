import React from 'react';
import axios from 'axios';
import './card.css';
import { Card, Alert,Form,Col,Row,Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import {Redirect,BrowserRouter} from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";

class RCard extends React.Component {
    constructor(){
        super();
        this.state = {
        redirectToReferrer: false
        };
        this.redirector = this.redirector.bind(this);
    }

    redirector()
    {
        this.setState({redirectToReferrer: true});
    }

     render() {

        if(this.state.redirectToReferrer)
        {
          return (
    
   
            <Redirect to={{
              pathname: '/product'
          }} />
    
            )
        }

    return (
       
        <div class="product">
        
<Card tag="a" onClick={this.redirector} style={{cursor: "pointer"}}>
<div class="view zoom">
<div class="timg">
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71TVOmJQ2QL._SL1500_.jpg" />
  </div>
  </div>
  <Card.Body>
    <Card.Title><div class="tease">ON (Optimum Nutrition) Gold Standard 100% Whey Protein, 5 lb Double Rich Chocolate</div></Card.Title>
    <font size="15px"><b>₹4500</b></font> &nbsp;  <strike>  <font color="#808080"> ₹5000 </font> </strike> &nbsp;   <MDBBadge pill color="danger">
                      10% off
                    </MDBBadge>
    <Card.Text>
    <div class="outter">
    <StarRatings
          rating={4.5}
          starRatedColor="ffc722"
          starDimension="15px"
          starSpacing="1px"
          numberOfStars={5}
          name='rating'
        /> 
        (1100 reviews)
        </div>
    </Card.Text>
   
  </Card.Body> 
</Card>
</div>
         );
  }
}

export default RCard;