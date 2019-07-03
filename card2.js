import React from 'react';
import axios from 'axios';
import './card2.css';
import ReactImageMagnify from 'react-image-magnify';
import { Card, Alert,Form,Col,Row,Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import {Redirect,BrowserRouter} from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";

class RCard2 extends React.Component {
    constructor(){
        super();
        this.state = {
        source: 'https://images-na.ssl-images-amazon.com/images/I/71TVOmJQ2QL._SL1500_.jpg'
        };
        this.imageClick = this.imageClick.bind(this);
    }


    imageClick(name)
    {
        this.setState({source:name});
    }

    
     render() {

    return (
       
        <div>
        
<Card tag="a" style={{cursor: "pointer"}}>
<div class="timg">
<ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: this.state.source
    },
    largeImage: {
        src: this.state.source,
        width: 1200,
        height: 1800
    },
    enlargedImageContainerDimensions: {
        width: '295%',
        height: '125%'
    }

}} />

<div class="scrollmenu">
<img class="fimg" src="https://images-na.ssl-images-amazon.com/images/I/71TVOmJQ2QL._SL1500_.jpg" width="50px" height="50px" onClick={() => this.imageClick("https://images-na.ssl-images-amazon.com/images/I/71TVOmJQ2QL._SL1500_.jpg")} />
<img class="fimg" src="https://img10.hkrtcdn.com/6280/prd_627969-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg" width="50px" height="50px" onClick={() => this.imageClick("https://img10.hkrtcdn.com/6280/prd_627969-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg")} />
<img class="fimg" src="https://img4.hkrtcdn.com/7101/prd_710023-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg" width="50px" height="50px" onClick={() => this.imageClick("https://img4.hkrtcdn.com/7101/prd_710023-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg")} />
<img class="fimg"src="https://img8.hkrtcdn.com/6279/prd_627897-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg" width="50px" height="50px" onClick={() => this.imageClick("https://img8.hkrtcdn.com/6279/prd_627897-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg")} />
<img class="fimg"src="https://img5.hkrtcdn.com/2152/prd_215154_o.jpg" width="50px" height="50px" onClick={() => this.imageClick("https://img5.hkrtcdn.com/2152/prd_215154_o.jpg") } />
<img src="https://img4.hkrtcdn.com/6329/prd_632823-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Delicious-Strawberry-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg" width="50px" height="50px" onClick={() => this.imageClick("https://img4.hkrtcdn.com/6329/prd_632823-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Delicious-Strawberry-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg")} />
</div>
 
  </div>

<div class="tu">
  <Card.Body>
    
    <Card.Text>
    <div class="outter">
    <StarRatings
          rating={4.5}
          starRatedColor="ffc722"
          starDimension="25px"
          starSpacing="2px"
          numberOfStars={5}
          name='rating'
        /> 
        1617 Ratings , 1198 Reviews
        </div>
    </Card.Text>   
  </Card.Body> 

  </div>
</Card>


</div>
         );
  }
}

export default RCard2;