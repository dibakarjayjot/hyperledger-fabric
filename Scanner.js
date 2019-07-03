import React from 'react';
import './Scanner.css';
import QrReader from 'react-qr-reader';
import GetLoginData from './GetLoginData'
import Login2 from './Login2';
import Header from './header';
import Footer from './footer';
import Fourth from './fourth';

class Scanner extends React.Component {
  state = {
    result2: 'No_result',
    type:'WheyProtein',
    owner:'nil',
    manufacturer:'nil',
    distributor:'nil',
    distributor2:'nil',
    retailer:'nil',
    seller:'nil',
    seller2:'nil',
    category:'nil',
    flavour:'nil',
    size:'nil',
    dateofcreation:'nil',
    counter: 0
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result2: data
      })
      GetLoginData(this.state.type).then((result) => {
        let responseJson = result;
       console.log(responseJson);
        var n = responseJson.length;
        for (var i = 0; i < n; i++) {
        if(this.state.result2==responseJson[i].assetKey ){
            this.state.owner=responseJson[i].owner;
            this.state.manufacturer=responseJson[i].ManufacturerDetails;
            this.state.distributor=responseJson[i].DistributorDetails.distributor;
            this.state.distributor2=responseJson[i].DistributorDetails.timestamp;
            this.state.seller=responseJson[i].SellerDetails.RetailerId;
            this.state.seller2=responseJson[i].SellerDetails.timestamp;
            this.state.category=responseJson[i].Type;
            this.state.flavour=responseJson[i].Flavour;
            this.state.size=responseJson[i].Size;
            this.state.dateofcreation=responseJson[i].timeoftransaction;
            this.state.counter++;
            break;

        }
      
    }
    
        });
    

       
}}


  handleError = err => {
    console.error(err)
  }

  render() {
  
    return (
     
      <div class="auth">
      <div class="img-container8">

        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '80%' }}
        />
        <p>{this.state.result2}</p>
        
        </div>

       
        <div class="img-container18"><p>
          <h3><b>SCAN RESULTS</b></h3> <br></br>
          Date of creation : {this.state.dateofcreation}
      <br></br>Type : {this.state.category}
      <br></br>Flavour : {this.state.flavour}
      <br></br>Size : {this.state.size}
      <br></br>Last known owner : {this.state.owner}
      <br></br>Manufacturer : {this.state.manufacturer}
      <br></br>Distributor : {this.state.distributor}
      <br></br>Date of transfer to distributor : {this.state.distributor2}
      <br></br>SELLER DETAILS : {this.state.seller}
      <br></br>Time at which product was sold : {this.state.seller2}</p>
      </div>
     
      </div>


  
    );
  }
}

export default Scanner;
