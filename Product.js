import React from 'react';
import axios from 'axios';
import './Product.css';
import { Card, Alert,Form,Col,Row,Button } from 'react-bootstrap';
import {Redirect,BrowserRouter} from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import Headerz from './header';
import Cardz from './card2';

class Product extends React.Component {
     constructor(){
        super();
        this.state = {
            rcart:false,
            rbuy:false,
            sometext:'hello',
        size:'5 lb',
        flavour:'Double Rich Chocolate',
        btncolor:['outline-success','outline-dark','outline-dark','outline-dark','outline-dark','outline-success','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark','outline-dark']
        };
        this.wtchange = this.wtchange.bind(this);
        this.flavchange = this.flavchange.bind(this);
        this.ret = this.ret.bind(this);
        this.redirectcart = this.redirectcart.bind(this);
        this.redirectbuy = this.redirectbuy.bind(this);
       
    }

    redirectcart()
    {
        this.setState({rcart: true});
    }

    redirectbuy()
    {
        this.setState({rbuy: true});
    }

    ret(val)
    {
        this.setState({sometext: val});
    }

    wtchange(weight,bcolor,z)
    {
        this.setState({size: weight});
        this.state.btncolor[z]=bcolor;
        for(var i=0;i<5;i++)
        {
            if(i!=z)
            {
                this.state.btncolor[i]="outline-dark";
            }
         
        }
    }
    

    flavchange(flav,bcolor,z)
    {
        this.setState({flavour: flav});
        this.state.btncolor[z]=bcolor;

        for(var i=5;i<16;i++)
        {
            if(i!=z)
            {
                this.state.btncolor[i]="outline-dark";
            }
         
        }
    }




render() {
    if(this.state.rcart)
    {
      return (


        <Redirect to={{
          pathname: '/cart'
      }} />

        )
    }
    if(this.state.rbuy)
    {
      return (


        <Redirect to={{
          pathname: '/cart'
      }} />

        )
    }
return (
    <div>
        <section>
            <Headerz/>
        </section>

   <section class="prod">
   <div class="row">

  <div class="column">
  <Cardz />
  </div>

  <div class="column2">
  <h1> ON (Optimum Nutrition) Gold Standard 100% Whey Protein, {this.state.size} {this.state.flavour} </h1>
  <ul>
<li> 
<img src="https://img3.hkrtcdn.com/react/static/media/pdp/effcacy-64.svg" alt="eficacy" width="25px" height="25px"/>
This Product Helps in Muscle Building
</li>
<li>
<img src="https://img1.hkrtcdn.com/react/static/media/pdp/mixablity-63.svg" alt="mixiblity" width="25px" height="25px"/>
&nbsp; Generally Consumed With &nbsp; Water or Milk
</li>
</ul>


This product is already at its Best Price. No other offer/coupon is valid on this product. 
 
  <div class="column3">
  <br></br>
Weight:{this.state.size} <br></br>
<Button variant={this.state.btncolor[0]} size="sm" onClick={() => this.wtchange("1 lb","outline-success","0")}>1lb</Button>
<Button variant={this.state.btncolor[1]}  size="sm"  onClick={() => this.wtchange("10 lb","outline-success","1")}>10lb</Button>
<Button variant={this.state.btncolor[2]}  size="sm" onClick={() => this.wtchange("2 lb","outline-success","2")}>2lb</Button>
<Button variant={this.state.btncolor[3]}  size="sm"onClick={() => this.wtchange("2.4 lb","outline-success","3")} >2.4lb</Button>
<Button variant={this.state.btncolor[4]}  size="sm" onClick={() => this.wtchange("5 lb","outline-success","4")}>5lb</Button>
<br></br>
<br></br>
Flavour:{this.state.flavour} <br></br>

<Button variant={this.state.btncolor[5]}  size="sm" onClick={() => this.flavchange("Chocolate Malt","outline-success","5")}>Chocolate Malt</Button>
<Button variant={this.state.btncolor[6]}  size="sm" onClick={() => this.flavchange("Chocolate","outline-success","6")}>Chocolate</Button>
<Button variant={this.state.btncolor[7]}  size="sm" onClick={() => this.flavchange("Coffee","outline-success","7")}> Coffee</Button>
<Button variant={this.state.btncolor[8]}  size="sm" onClick={() => this.flavchange("Cookies & Cream","outline-success","8")}>Cookies & Cream</Button>
<Button variant={this.state.btncolor[9]}  size="sm" onClick={() => this.flavchange("Delicious Strawberry","outline-success","9")}>Delicious Strawberry</Button>
<Button variant={this.state.btncolor[10]}  size="sm" onClick={() => this.flavchange("Double Rich Chocolate","outline-success","10")}>Double Rich Chocolate</Button>
<Button variant={this.state.btncolor[11]}  size="sm" onClick={() => this.flavchange("Extreme Milk Chocolate","outline-success","11")}>Extreme Milk Chocolate</Button>
<Button variant={this.state.btncolor[12]}  size="sm" onClick={() => this.flavchange("French Vanilla Cream","outline-success","12")}>French Vanilla Cream</Button>
<Button variant={this.state.btncolor[13]}  size="sm" onClick={() => this.flavchange("Mocha Cappuccino","outline-success","13")}>Mocha Cappuccino</Button>
<Button variant={this.state.btncolor[14]}  size="sm" onClick={() => this.flavchange("Rocky Road","outline-success","14")}>Rocky Road</Button>
<Button variant={this.state.btncolor[15]}  size="sm" onClick={() => this.flavchange("Strawberry Banana","outline-success","15")}>Strawberry Banana</Button>
<hr></hr>
<label>Check Delivery:</label>
<input type="text" name="pin"  placeholder="Enter your pincode" onChange={this.onChange}/>
<input type="submit" value="Check" onClick={this.login}/>
  </div>
  <div class="column3">
  <br></br>
MRP:<strike>₹ 7699</strike>
<br></br>
Price:₹ 6159 &nbsp; <MDBBadge pill color="danger">
                   10% off
                 </MDBBadge>
<br></br><br></br>
<Button variant="danger" size="lg" onClick={() => this.redirectcart()}>ADD TO CART</Button>
<Button variant="info" size="lg" onClick={() => this.redirectbuy()}> BUY NOW</Button>

  </div>
  </div>

</div>
  

   </section>

   <section class="details">
   <h1>Product Details</h1>
       <hr></hr>
   <div class="row">

   <div class="column3">
   
   Optimum Nutrition Gold Standard 100% Whey Protein 5 lb Double Rich Chocolate comes with whey protein isolate and ultra-filtered whey protein concentrate, which provide support in the development of lean muscle
   <br></br>
It contains 5.5 grams of naturally occurring BCAAs and helps in rapid muscle recovery after strenuous workout sessions
<br></br>
It also helps to maintain and improve the metabolism of your body
<br></br>
It provides support for the enhancement of your energy and stamina
<br></br>
ON Gold Standard Whey Protein Double Rich Chocolate is a naturally flavoured premium quality health supplement that is made to accelerate immunity & provide optimum nourishment
       </div>
   <div class="column3">
   Sold by: VENTE RETAIL. <br></br>
Manufacturer: Optimum Nutrition, 975 MERIDIAN LAKE DR. AURORA IL 60504, Contact:  011 4959 4959, Email: indiacustomercare@glanbia.com

   </div>
      </div> 
   </section>

   <section class="info">
  
  <h1>Product Info</h1>
       <hr></hr>

       <table>
  <tr>
  <th colSpan="100%">General Traits</th>
  </tr>
  <tr>
  <td>Protein per Serving</td>
      <td>24 g</td>
  </tr>
  <tr>
  <td>Number of Servings</td>
      <td>74</td>
  </tr>
  <tr>
  <td>Serving Size</td>
      <td>30.4 g</td>
  </tr>
</table>
<br></br>
<table>
  <tr>
  <th colSpan="100%">Additional Information</th>
  </tr>
  <tr>
  <td>Protein per Serving</td>
      <td>24 g</td>
  </tr>
  <tr>
  <td>Number of Servings</td>
      <td>74</td>
  </tr>
  <tr>
  <td>Serving Size</td>
      <td>30.4 g</td>
  </tr>
</table>

   </section>

   <section class="tabular">
   <div class="tab">
 <div class="row">
  <div class="column3">
  <button class="tablinks" onClick={() => this.ret("Details")}>Details</button>
  </div>
 <div class="column3">
  <button class="tablinks" onClick={() => this.ret("Supplement info")}>Supplement info</button>
  </div>
  </div>
</div>
{this.state.sometext}
   </section>




</div>

         );
  }
}

export default Product;