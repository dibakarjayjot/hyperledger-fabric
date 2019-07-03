import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './login2.css';
import './popup.css';
import {Redirect,BrowserRouter} from 'react-router-dom';
import GetLoginData from './GetLoginData'
import addWhey from './addWhey';
import Home from './home';
import { Form,Col,Button } from 'react-bootstrap';
import axios from 'axios';


export default class Login2 extends React.Component {
	constructor(){
        super();
        this.state = {
          id: '',
          type: 'select',
        email: '',
        password: '',
        redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange3  = this.handleChange3 .bind(this);
        }

        
      
        
        
        login() {
        
          if(this.state.type=="select")
          {
            window.confirm("Please select login type"); 
          }else{
        
            axios.post('http://35.229.19.138:8080/login/', {
              email: this.state.email,
              password: this.state.password,
              category: this.state.type
            })
            .then((response) => {
              
              if(response.data.output.length === 0 )
              {
                window.confirm("INVALID CREDENTIALS"); 
              }
              else {
                if(response.data.output[0].category==this.state.type){
                this.setState({redirectToReferrer: true});
               
              }}
              


            })
            .catch((e) => 
            {
              console.error(e);
            });
          
  
  
   
               }
              
             
              
               
              
              }
        
        
        onChange(e){
        this.setState({[e.target.name]:e.target.value});
        }

        handleChange3 = (e) => {
          this.setState({
              type: e.target.value,
          })
      }

        render() {  
    
          if(this.state.redirectToReferrer)
          {
            return (
      
     
              <Redirect to={{
                pathname: '/dashboard',
                state: { uid: this.state.id, ref:this.state.email , utype:this.state.type}
            }} />
      
              )
          }
          
          
         
  return (
    <div>
      <Home/>
    <div className='popup'>
        <div className='popup_inner'>

    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>

              <Form.Group controlId="type">
    <Form.Control as="select"  id="lang" onChange={this.handleChange3.bind(this)} value={this.state.type}>
  
          <option value="select">Select the login type</option>
          <option value="Manufacturer">Manufacturer Login</option>
          <option value="Distributor">Distributor Login</option>
          <option value="Retailer">Retailer Login</option>
      
        </Form.Control>
        </Form.Group>
              <MDBInput
                label="Your email"
                icon="user"
                validate
                error="wrong"
				success="right"
				name="email" onChange={this.onChange}
              />
              <MDBInput
                label="Your password"
                icon="lock"
                type="password"
                validate
				containerClass="mb-0"
				name="password" onChange={this.onChange}
              />
             
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
				  className="btn-block z-depth-1a"
				  value="Login" onClick={this.login}
                >
                  <font color="white">Sign in</font>
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
            <p className="font-small grey-text d-flex justify-content-end">
                
                <a href="#!" className="blue-text ml-1">

                Forgot Password?
                </a>
              </p>
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="signup" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
    </div>
    </div></div>
  );
}
}