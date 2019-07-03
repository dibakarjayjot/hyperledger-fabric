import React from 'react';
import axios from 'axios';
import './transfertoretailer.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

class transfertoretailer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assetkey: '',
            retailerid: ''
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
        assetkey: this.state.assetkey,
        retailerid: this.state.retailerid

       }
         {/* Send data to API*/}
         var authOptions = {
          method: 'post',
          url: 'http://35.229.19.138:3000/api/org.authentication.whey.transfertoretailer',
          data: JSON.stringify({"whey": "resource:org.authentication.whey.WheyProtein#"+this.state.assetkey,"retailer": "resource:org.authentication.whey.Retailer#"+this.state.retailerid, "RetailerId":this.state.retailerid}),
          headers: {
            'Content-Type': 'application/json'
           },
          json: true
         };
      axios(authOptions)
         .then((response) => {
          if(response.status==200){
            window.confirm("Transfer successfull"); 
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
            <div class="main6">

            <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">TRANSFER TO RETAILER</p>
            <div className="grey-text">
              <MDBInput
                label="Whey Id"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name='assetkey'
                        value={this.state.assetkey}
                        onChange={e => this.handleChange(e)}
              />
              <MDBInput
                label="Retailer's email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name='retailerid'
                        value={this.state.retailerid}
                        onChange={e => this.handleChange(e)}
              />
         
            </div>
            <div className="text-center">
              <MDBBtn outline color="success" onClick={(e) => this.onSubmit(e)}>
                TRANSFER <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            </div>
        );
    }
    }

   export default transfertoretailer;
  
