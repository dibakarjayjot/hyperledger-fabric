import React from 'react';
import axios from 'axios';
import './Product.css';
import { Card, Alert,Form,Col,Row,Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import {Redirect,BrowserRouter} from 'react-router-dom';
import { MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import { Header } from 'semantic-ui-react';
import Headerz from './header';
import Product from './Product'
import Cardz from './card2';

class Address extends React.Component {
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
        pathname: '/card'
    }} />

      )
  }
return (
<form>
                      <MDBRow>
                        <MDBCol md="6" className="mb-4">
                          <label htmlFor="firstName">First name</label>
                          <input type="text" id="firstName" className="form-control" />
                        </MDBCol>
                        <MDBCol md="6" className="mb-2">
                          <label htmlFor="lastName">Last name</label>
                          <input type="text" id="lastName" className="form-control" />
                        </MDBCol>
                        <MDBCol>
                          <div className="input-group mb-4">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control py-0" placeholder="Username" aria-describedby="basic-addon1" />
                          </div>
                          <label htmlFor="email">Email (optional)</label>
                          <input type="text" id="email" className="form-control mb-4" placeholder="youremail@example.com" />
                          <label htmlFor="address">Address</label>
                          <input type="text" id="address" className="form-control mb-4" placeholder="1234 Main St" />
                          <label htmlFor="address-2">Address 2 (optional)</label>
                          <input type="text" id="address-2" className="form-control mb-4" placeholder="Apartment or suite" />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol lg="4" md="12" className="mb-4">
                          <label htmlFor="country">Country</label>
                          <select className="custom-select d-block w-100" id="country" required>
                            <option>Choose...</option>
                            <option>United States</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-4">
                          <label htmlFor="state">State</label>
                          <select className="custom-select d-block w-100" id="state" required>
                            <option>Choose...</option>
                            <option>California</option>
                          </select>
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-4">
                          <label htmlFor="zip">Zip</label>
                          <input type="text" className="form-control" id="zip" required />
                          <div className="invalid-feedback">
                            Zip code required.
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <div className="mb-1">
                        <input type="checkbox" className="form-check-input filled-in" id="chekboxRules" />
                        <label className="form-check-label" htmlFor="chekboxRules">I accept the terms and conditions</label>
                      </div>
                      <div className="mb-1">
                        <input type="checkbox" className="form-check-input filled-in" id="safeTheInfo" />
                        <label className="form-check-label" htmlFor="safeTheInfo">Save this information for next time</label>
                      </div>
                      <div className="mb-1">
                        <input type="checkbox" className="form-check-input filled-in" id="subscribeNewsletter" />
                        <label className="form-check-label" htmlFor="subscribeNewsletter">Subscribe to the newsletter</label>
                      </div>
                      <hr />
                      <MDBBtn color="primary" size="lg" block onClick={this.selectNextTab}>Next step</MDBBtn>
                    </form>

                      );
  }
}

export default Address;