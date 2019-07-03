import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './Signup.css';
import './popup.css';
import {Redirect,BrowserRouter} from 'react-router-dom';
import GetLoginData from './GetLoginData'
import addWhey from './addWhey';
import Home from './home';
import { Form,Col,Button } from 'react-bootstrap';
import axios from 'axios';


export default class Signup extends React.Component {
	constructor(){
        super();
        this.state = {
          id: '',
          first_name: '',
          last_name: '',
              address: '',
          category:'',
        email: '',
        password: '',
        redirectToReferrer: false
        };
        this.signup = this.signup.bind(this);
        this.checkuser = this.checkuser.bind(this);
        this.onChange = this.onChange.bind(this);
        }

        checkuser()
        {
          axios.post('http://35.229.19.138:8080/profile/', {
            email: this.state.email,
          })
          .then((response) => {
            if(response.data.output.length==0)
            {
               this.signup();
            }
            else{
              alert("User with email "+this.state.email+" already exists!")
            }
          })
          .catch((e) => 
          {
            console.error(e);
          });
         
        }
      
        
        
        signup() {
            axios.post('http://35.229.19.138:8080/signup/', {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              address: this.state.address,
              email: this.state.email,
              password: this.state.password,
              category:  "Retailer"
            })
            .then((response) => {
              if(response.status==200)
              {
                alert("Sign up successfull, click on sign in to proceed");
              }
              else{
                alert("Something went wrong");
              }
            })
            .catch((e) => 
            {
              console.error(e);
            });
          
  
  
   
               }

        
        
        onChange(e){
        this.setState({[e.target.name]:e.target.value});
        }

    

        render() {  
         
  return (
    <div>
      <Home/>
    <div className='popup'>
        <div className='popup_inner'>

    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 peach-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                  Sign Up
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
            <div class="row">
            <div class="columnsignup">
            <MDBInput
                    label="Type your first name"
                    icon="user"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="first_name" onChange={this.onChange}
                  />
               </div>
               <div class="columnsignup">
                  <MDBInput
                    label="Type your last name"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="last_name" onChange={this.onChange}
                  />
                   </div>
                  </div>
              <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="email" onChange={this.onChange}
                  />
                   <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    name="password" onChange={this.onChange}
                  />

<MDBInput
                    label="Type your address"
                    icon="address-card"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="address" onChange={this.onChange}
                  />

              <MDBRow className="d-flex align-items-center mb-4 mt-5">
                <MDBCol md="5" className="d-flex align-items-start">
                  <div className="text-center">
                    <MDBBtn
                      color="deep-orange"
                      rounded
                      type="button"
                      className="z-depth-1a"
                      value="signup" onClick={this.checkuser}
                    ><font color="white"> Sign Up</font>
                     
                    </MDBBtn>
                  </div>
                </MDBCol>
                <MDBCol md="7" className="d-flex justify-content-end">
                  <p className="font-small grey-text mt-3">
                    Already have an account?
                    <a
                      href="/account"
                      className="dark-grey-text ml-1 font-weight-bold"
                    >
                      Sign in
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  
    
    </div>
    </div></div>
  );
}
}