import React from 'react';
import './home.css';
import BackgroundHeader from "./homeimgtrue.png";
import BackgroundHeader2 from "./logo5.png";
import {  Button } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import Fourth from './fourth';
import Scanner from './Scanner';


class Scan extends React.Component {
    render() {
    return (
<div>
<Header/>
<Scanner />
<Fourth />
<div>
   
   The entry of a new product in the market gives rise to two consequences – patronage from customers and the development of their counterfeit counterparts. 

As the patronage from customers increases, the chances of counterfeit products seeping into the market increases simultaneously and because of this, both end users and the company involved suffer from the out-turns. 

After the rise of e-commerce platforms, infiltrating counterfeit products has become far simpler, leading the manufacturer to face a domino effect of ramifications in the market. Of all the industries, it is the medical industry, especially the Supplement sector, that suffers most from devastating impacts of counterfeit products.
<br></br>
<br></br> <br></br> <br></br> <br></br>
</div>

<Footer/>
</div>
          
    );
  }
}

export default Scan;
