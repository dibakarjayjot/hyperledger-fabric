import React from 'react';
import axios from 'axios';
import './card4.css';
import { Card, Alert,Form,Col,Row,Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import {Redirect,BrowserRouter} from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import { Header } from 'semantic-ui-react';
import Headerz from './header';
import Product from './Product'
import Cardz from './card2';

class card4 extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      quantity: 1
    }
    this.addquantity = this.addquantity.bind(this);
    this.deductquantity = this.deductquantity.bind(this);
  }

  addquantity()
  {
   var i=this.state.quantity+1;
    this.setState({quantity:i});
   
  }


  deductquantity()
  {
    var i=this.state.quantity-1;
    if(i>0)
    this.setState({quantity: i});
  }
render() {

return (
    <div>
        <section>
 <div class="test">
   <div class="row">

  <div class="twenty">
  
<img src="https://img2.hkrtcdn.com/6280/prd_627961-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_t.jpg" width="70px" height="70px" />

</div>

<div class="thirty">
ON (Optimum Nutrition) Gold Standard 100% Whey Protein, 5 lb Double Rich Chocolate
</div>

<div class="twenty">
&nbsp; &nbsp;
<button class="button4" onClick={() => this.addquantity()}>+</button> {this.state.quantity} <button class="button4" onClick={() => this.deductquantity()}>-</button>
</div>

<div class="thirty">
<div class="right">
₹ 12,318
<br></br>
<strike>₹ 15,398</strike>
<br></br>
Remove|Add to Wishlist
</div>
</div>

</div>
</div>
 </section>
 </div>


       );
  }
}

export default card4;