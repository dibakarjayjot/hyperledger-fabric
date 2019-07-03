import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import axios from 'axios';
import Dashboard from './dashboard';
import './addSuper.css';


class addSuper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            country: ''
        };
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
       e.preventDefault();
       const form = {
        name: this.state.name,
        email: this.state.email,
        country: this.state.country
       }
         {/* Send data to API*/}
         var authOptions = {
          method: 'post',
          url: 'http://35.229.19.138:3000/api/org.authentication.whey.addSuper',
          data: JSON.stringify({"name": this.state.name,"email": this.state.email,"country": this.state.country}),
          headers: {
            'Content-Type': 'application/json'
           },
          json: true
         };
      axios(authOptions)
         .then((response) => {
          if(response.status==200){
            window.confirm("Added succesfully"); 
          }
          else{
            window.confirm("SOMETHING WENT WRONG"); 
          }
             })
         .catch((error) => {
            alert(error)
           })
      
    }
    render() {
  return (
    <div class="main3">
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">ADD SUPER</p>
            <div className="grey-text">
              <MDBInput
                label="Super's name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name='name'
                        value={this.state.name}
                        onChange={e => this.handleChange(e)}
              />
              <MDBInput
                label="Super's email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name='email'
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
              />
            
              <MDBInput
                type="textarea"
                rows="2"
                label="Super's address"
                icon="pencil-alt"
                name='country'
                        value={this.state.country}
                        onChange={e => this.handleChange(e)}
              />
             
            </div>
            <div className="text-center">
              <MDBBtn outline color="success" onClick={(e) => this.onSubmit(e)}>
               ADD <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}}

export default addSuper;