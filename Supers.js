import React from "react";
import axios from 'axios';
import { Table,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import './Supers.css';


class Supers extends React.Component {
    constructor(){
        super() 
          this.state = {
            data: [],
            owner:'nil'
          }
        
      }
      componentDidMount() {
        fetch("http://35.229.19.138:3000/api/org.authentication.whey.Super")
        // when we get a response map the body to json
        .then(response => response.json())
        // and update the state data to said json
        .then(data => this.setState({ data }));
        console.log(this.state.data)
      }
    
      render() { 
        return (
          <div class="main12">
            <p className="h5 text-center mb-4">REGISTERED SUPERS IN THE NETWORK</p>
                            <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
         
        
        </tr>
      </thead>
      <tbody>{this.state.data.map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address.country}</td>
                    
                    </tr>
                  )
               
               })}</tbody>
    </Table>
   
           </div>
        );
      }
    }
    
export default Supers;