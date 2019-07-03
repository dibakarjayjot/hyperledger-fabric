import React from "react";
import axios from 'axios';
import { Table,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import './profile.css';


class Profile extends React.Component {
    constructor(){
        super() 
          this.state = {
            data2: [],
            owner:'nil'
          }
        
      }
      componentDidMount() {
        axios.post('http://35.229.19.138:8080/profile/', {
            email: this.props.TextBoxValue[0]
          })
          .then((response) => {
            this.setState({ data2 : response.data.output });      
            console.log(this.state.data2)

        })
  
      }

 render() {
        return (
            <div class="prof">
            My details:
            {this.state.data2.map(function(item, key) {
                 
                 return (
                   <div>
                       <img src="https://image.flaticon.com/icons/png/512/64/64572.png" width="30px" height="30px"/>
                       &nbsp; {item.first_name} {item.last_name}
                        <br></br>
                       {item.email}
                       <br></br>
                        {item.address}
                        <br></br>
                        {item.category}
                        <br></br>
                        Total contacts :
                        <br></br>
                        Supers :  &nbsp; Distributors: &nbsp; Retailers:                    
                        </div>
                  )
               
               })}

            </div>

         );
      }
    }
    
export default Profile;