import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Table,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import './addDistributor.css';


class Fetch extends Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
  }
  componentDidMount() {
    fetch("http://35.229.19.138:3000/api/org.authentication.whey.WheyProtein")
    // when we get a response map the body to json
    .then(response => response.json())
    // and update the state data to said json
    .then(data => this.setState({ data }));
  }

  render() {
    
        
    return (
      <div>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      
    </tr>
  </thead>

  <tbody>{this.state.data.filter((item) => item.owner == "resource:org.authentication.whey.Distributor#xyza@gmail.com"+this.props.TextBoxValue).map(function(item, key) {
             
             return (
                <tr key = {key}>
                    <td>{item.assetKey}</td>
                    <td>{item.Type}</td>
                    <td>{item.owner}</td>
          
                </tr>
              )
           
           })}</tbody>
</Table>
       </div>
    );
  }
}

export default Fetch;
