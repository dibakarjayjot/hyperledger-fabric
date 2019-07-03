import React from 'react';
import AddWhey from './addWhey';
import SellWhey from './sellWhey';
import TransferD from './transfertodistributor';
import TransferR from './transfertoretailer';
import TransferS from './transfertosuper';
import TransferM from './transfertomiddleman';
import AddDistributor from './addDistributor';
import AddRetailer from './addRetailer';
import AddSuper from './addSuper';
import AddMiddleman from './addMiddleman';
import Header2 from './header2';
import Footer from './footer';
import Fourth from './fourth';
import Inventory from './inventory';
import Fetch from './Fetch';
import Distributors from './Distributors';
import Retailers from './Retailers';
import Supers from './Supers';
import Profile from './profile';
import Middlemans from './Middlemans';
import Activity from './activity';
import axios from 'axios';
import Message from './message';

import './dashboard.css';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

class MainPageComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      checkMount:false,
      data2: [],
      message:[]
    };
    }

    componentDidMount() {
      this.state.checkMount=true;
      
      axios.post('http://35.229.19.138:8080/profile/', {
          email: this.props.TextBoxValue[0]
        })
        .then((response) => {
          if(this.state.checkMount)
      {
          this.setState({ data2 : response.data.output });  
        }    
      })
    
    }

    componentWillUnmount() {
      this.state.checkMount = false;
    }

  render() {
    return (
      
      <div className="main">
        {this.state.data2.map(function(item, key) {
                 
                 return (
                   <div>
                      <h1> Welcome : {item.first_name} {item.last_name} , {item.category} </h1>               
                        </div>
                  )
               
               })}

        <h3>
          Try to scroll this area, and see how the sidenav sticks to the page
        </h3>
        <p>
          Notice that this div element has a left margin of 25%. This is because
          the side navigation is set to 25% width. If you remove the margin, the
          sidenav will overlay/sit on top of this div.
        </p>
        <p>
          Also notice that we have set overflow:auto to sidenav. This will add a
          scrollbar when the sidenav is too long (for example if it has over 50
          links inside of it).
        
        </p>
    
      
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        
      </div>
     
    );
  }
}

class SideNavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home",
    TextBoxValue: []
  };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }
  SubmitValue = (e) => {
    this.props.handleData(this.state.TextBoxValue)
 }
   

       onChange=(e)=>{
    this.setState({TextBoxValue: e.target.value})
       } 


  render() {
    const { activeItem } = this.state;
    this.state.TextBoxValue[0]=this.props.location.state.ref;
    this.state.TextBoxValue[1]=this.props.location.state.utype;
    console.log("try"+this.state.TextBoxValue[0]+this.state.TextBoxValue[1])
    return (
      <div>
        <Header2 />
      <div>
      {(() => {
        if(this.props.location.state.utype=="Manufacturer")
        {
          return(
        <Menu vertical id="side-menu">
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Inbox"
            active={activeItem === "inbox"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Add Whey Protein"
            active={activeItem === "addwhey"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Add Super"
            active={activeItem === "addsuper"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Add Distributor"
            active={activeItem === "adddistributor"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Add Retailer"
            active={activeItem === "addretailer"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Add Middleman"
            active={activeItem === "addmiddleman"}
            onClick={this.handleItemClick}
          />

           <Menu.Item
            name="Transfer to super"
            active={activeItem === "transfers"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Transfer to distributor"
            active={activeItem === "transferd"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Transfer to retailer"
            active={activeItem === "transferr"}
            onClick={this.handleItemClick}
          />

         <Menu.Item
            name="Transfer to Middleman"
            active={activeItem === "transferm"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Sell Whey Protein"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Whey Protein Inventory"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
          
          <Menu.Item
            name="Supers"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
              <Menu.Item
            name="Distributors"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Retailers"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />

         <Menu.Item
            name="Middlemans"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
        </Menu>)
      }
      else if(this.props.location.state.utype=="Distributor")
        {
          return(
        <Menu vertical id="side-menu">
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          />
            <Menu.Item
            name="Inbox"
            active={activeItem === "inbox"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Transfer to super"
            active={activeItem === "transfers"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Transfer to retailer"
            active={activeItem === "transferr"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Transfer to Middleman"
            active={activeItem === "transferm"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Sell Whey Protein"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Whey Protein Inventory"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Retailers"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
        </Menu>)
      }
      else if(this.props.location.state.utype=="Retailer")
      {
        return(
      <Menu vertical id="side-menu">
        <Menu.Item
          name="Home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Profile"
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
        />
          <Menu.Item
            name="Inbox"
            active={activeItem === "inbox"}
            onClick={this.handleItemClick}
          />
        <Menu.Item
          name="Sell Whey Protein"
          active={activeItem === "sell"}
          onClick={this.handleItemClick}
        />
         <Menu.Item
           name="Whey Protein Inventory"
          active={activeItem === "sell"}
          onClick={this.handleItemClick}
        />
      </Menu>)
    }

        })()}
        {(() => {
             if(this.state.activeItem=="Add Whey Protein")
             { 
                return (
                <AddWhey TextBoxValue={this.state.TextBoxValue}/> )
             }
             else if(this.state.activeItem=="Add Distributor"){
              return( <AddDistributor />)
             }
             else if(this.state.activeItem=="Add Super"){
              return( <AddSuper />)
             }
             else if(this.state.activeItem=="Add Middleman"){
              return( <AddMiddleman />)
             }
             else if(this.state.activeItem=="Sell Whey Protein"){
                return( <SellWhey TextBoxValue={this.state.TextBoxValue} />)
               }
               else if(this.state.activeItem=="Transfer to retailer"){
                return( <TransferR />)
               }
               else if(this.state.activeItem=="Transfer to distributor"){
                return( <TransferD />)
               }
               else if(this.state.activeItem=="Transfer to super"){
                return( <TransferS />)
               }
               else if(this.state.activeItem=="Transfer to Middleman"){
                return( <TransferM />)
               }
               else if(this.state.activeItem=="Add Retailer"){
                return( <AddRetailer />)
               }
               else if(this.state.activeItem=="Distributors"){
                return( <Distributors />)
               }
               else if(this.state.activeItem=="Middlemans"){
                return( <Middlemans />)
               }
               else if(this.state.activeItem=="Supers"){
                return( <Supers />)
               }
               else if(this.state.activeItem=="Retailers"){
                return( <Retailers />)
               }
               else if(this.state.activeItem=="Inbox"){
                return(<Message TextBoxValue={this.state.TextBoxValue}/>)
               }
               
               else if(this.state.activeItem=="Whey Protein Inventory"){
                return(  <Inventory TextBoxValue={this.state.TextBoxValue}/>)
               }
               else if(this.state.activeItem=="Profile"){
                return(  <Profile TextBoxValue={this.state.TextBoxValue}/>)
               }
               else if(this.state.activeItem=="Home"){
                return(  <Activity TextBoxValue={this.state.TextBoxValue}/>)
               }
               else{
                return( <MainPageComponent TextBoxValue={this.state.TextBoxValue}/>)
               }


      })()}
       
   
        
      </div>
       <Fourth />
       <Footer />
       </div>
    );
  }
}

export default SideNavComponent;