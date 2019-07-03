import React from 'react';
import axios from 'axios';
import './Product.css';
import { Card, Alert,Form,Col,Row,Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import {Redirect,BrowserRouter} from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import { Header } from 'semantic-ui-react';
import Headerz from './header';
import Product from './Product'
import Cardz from './card2';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      red:false
    }
    this.checkout = this.checkout.bind(this);
  }

  checkout()
  {
  
    this.setState({red:true});
   
  }

render() {
  if(this.state.red)
  {
    return (


      <Redirect to={{
        pathname: '/billing'
    }} />

      )
  }
return (
<MDBCard>
                  <MDBCardBody>
                    <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">Summary</h4>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="8">
                        MDBootstrap UI KIT (jQuery version) - License 6-10 poeple + unlimited projects
                      </MDBCol>
                      <MDBCol sm="4">
                        $ 2000
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="8">
                        Premium support - 2 years
                      </MDBCol>
                      <MDBCol sm="4">
                        $ 200
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="8">
                        MDB Membership - 2 years
                      </MDBCol>
                      <MDBCol sm="4">
                        $ 100
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="8">
                        <strong>Total</strong>
                      </MDBCol>
                      <MDBCol sm="4">
                        <strong>$ 2300</strong>
                      </MDBCol>
                      <Button variant="primary" size="lg" onClick={() => this.checkout()}>
      Proceed to checkout
    </Button>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>




       );
  }
}

export default Cart;