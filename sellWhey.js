import React from 'react';
import axios from 'axios';
import QrReader from 'react-qr-reader';
import './sellWhey.css';
import { Form,Col,Button } from 'react-bootstrap';

export default class sellWhey extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      result: 'No_result',
      id:''
    }
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

onSubmit = (e) => {
  if(this.state.result=="No_result")
  {
    window.confirm("Please scan qr code first"); 
  }
  else
  {
   e.preventDefault();
   const form = {
    assetkey: this.state.assetkey,
    retailerid: this.state.retailerid,
    

   }
     {/* Send data to API*/}
     var authOptions = {
      method: 'post',
      url: 'http://35.229.19.138:3000/api/org.authentication.whey.sellWhey',
      data: JSON.stringify({"whey": "resource:org.authentication.whey.WheyProtein#"+this.state.result, "RetailerId": this.props.TextBoxValue[0]}),
      headers: {
        'Content-Type': 'application/json'
       },
      json: true
     };
  axios(authOptions)
     .then((response) => {
      if(response.status==200){
        window.confirm("Sold succesfully"); 
      }
      else{
        window.confirm("SOMETHING WENT WRONG"); 
      }
         })
     .catch((error) => {
        alert(error)
       })
  
}}


  render() {
    return (
      <div class="main7">
        <h3>SELL WHEY</h3>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '40%' }}
        />
     <br></br>
     
        <Button variant="outline-success" size="lg"   onClick={(e) => this.onSubmit(e)}>
          SELL
        </Button>
        
        
      </div>
    );
  }
}




