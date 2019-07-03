import React from 'react';
import axios from 'axios';
import './Cart.css';
import { Card, Alert,Form,Col,Row,Button } from 'react-bootstrap';
import {Redirect,BrowserRouter} from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import { Header } from 'semantic-ui-react';
import Headerz from './header';
import Cardz from './card3';
import Card4 from './card4';

class Cart extends React.Component {   

render() {
return (
<div>

  <section>
  <Headerz/>
  </section>

  <section class="posthead">
  <h1>My Cart (Qty 1 items)</h1>
  <div class="row">

<div class="column5">
  <Card4/>
  <h2>Apply Coupon</h2>
  <div class="check2">
 <input type="text" name="LastName" value="Enter your coupon" />
<input type="submit" value="Apply" />
</div>
  </div>
<div class="column6">
  <div class="check">
 <input type="text" name="LastName" value="Enter your pincode" />
<input type="submit" value="Check" />
</div>
<Cardz/>
</div>
</div>
  </section>
 
  
  </div>



       );
  }
}

export default Cart;