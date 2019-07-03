import React from 'react';
import './home.css';
import BackgroundHeader from "./homeimgtrue.png";
import BackgroundHeader2 from "./logo5.png";
import {  Button } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import Fourth from './fourth';

const BackgroundHead = {
  //backgroundImage: 'url('+ BackgroundHeader+')',
  backgroundColor: '#2B3C43',
  width: '100%',
  height: '600px',
  backgroundSize: 'cover'
  }
 

class Home extends React.Component {
  render() {
    return (
      <div>
     <div>
<Header />
     </div>
<div class="clearfix">
<div class="img-container">
<br></br>
<h5><img src={BackgroundHeader2} class="qimg"/><b> <font color="#383838">Abbyfy</font> </b></h5><br></br>
  <h2><font color="#383838"><b>A System for the Supply Chain Management</b></font></h2><br />
  <p><font color="#505050">
  Abbyfy is a React UI Framework integerated with Blockchain Technology for managing Supply chain on the web.
  <br></br>
  <br></br>
    <Button variant="outline-danger" size="sm" disabled><b>TRACK</b></Button> <Button variant="outline-primary" size="sm" disabled><b>ANALYSE</b></Button>
  <Button variant="outline-secondary" size="sm" disabled><b>LOGISTICS</b></Button>
   <br></br>
   <br></br>
 
   </font>
  </p>
</div>
<div class="img-container">
<img src={BackgroundHeader} alt="Mountains" class="pimg"/>
</div>
</div>

<div>
<Fourth />
</div>

   <div>
   
       The entry of a new product in the market gives rise to two consequences – patronage from customers and the development of their counterfeit counterparts. 

As the patronage from customers increases, the chances of counterfeit products seeping into the market increases simultaneously and because of this, both end users and the company involved suffer from the out-turns. 

After the rise of e-commerce platforms, infiltrating counterfeit products has become far simpler, leading the manufacturer to face a domino effect of ramifications in the market. Of all the industries, it is the medical industry, especially the Supplement sector, that suffers most from devastating impacts of counterfeit products.
<br></br>
<br></br> <br></br> <br></br> <br></br>
 </div>
 
<div>
<Footer />
</div>

   </div> 

     
    );
  }
}

export default Home;
