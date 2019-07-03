import React from "react";
import axios from 'axios';
import { Table, Form, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import './inventory.css';



class Inventory extends React.Component {
    constructor(){
        super() 
          this.state = {
            data: [],
            option:'',
            val:'',
            trueval:'1',
            owner:'nil'
          }
          this.ret = this.ret.bind(this);
        
      }
      componentDidMount() {
        fetch("http://35.229.19.138:3000/api/org.authentication.whey.WheyProtein")
        // when we get a response map the body to json
        .then(response => response.json())
        // and update the state data to said json
        .then(data => this.setState({ data }));
        console.log(this.state.data)
      }
      handleChange1 = (e) => {
        this.setState({
            option: e.target.value,
        })
    }
    handleChange2 = (e) => {
      this.setState({
          val: e.target.value,
      })
  }

  ret(val)
{
    this.setState({trueval:val});
   }

  onSubmit = (e) => {
    if(this.state.trueval=="wheyid"){
      if(this.props.TextBoxValue[1]=="Manufacturer")
      {
        return(
      <Table striped bordered hover>
        <thead>
          <tr>
           
            <th>S.No</th>
            <th>Whey Id</th>
            <th>Batch No.</th>
            <th>Type</th>
            <th>Size</th>
            <th>Flavour</th>
            <th>Time</th>
            <th>Current Owner</th>
          
          </tr>
        </thead>
        <tbody>{this.state.data.filter((item) => item.assetKey == this.state.val).map(function(item, key) {
                   
                   return (
                      <tr key = {key}>
                          <td>{item.assetKey}</td>
                          <td>{item.batchno}</td>
                          <td>{item.Type}</td>
                          <td>{item.Size}</td>
                          <td>{item.Flavour}</td>
                          <td>{item.timeoftransaction}</td>
                          <td>{item.owner}</td>
                      </tr>
                    )
                 
                 })}</tbody>
      </Table> 
    )
  }else{
    return(
      <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Whey Id</th>
          <th>Batch No.</th>
          <th>Type</th>
          <th>Size</th>
          <th>Flavour</th>
          <th>Time</th>
          <th>Current Owner</th>
        
        </tr>
      </thead>
      <tbody>{this.state.data.filter((item) => item.owner == this.state.owner && item.assetKey==this.state.val).map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.assetKey}</td>
                        <td>{item.batchno}</td>
                        <td>{item.Type}</td>
                        <td>{item.Size}</td>
                        <td>{item.Flavour}</td>
                        <td>{item.timeoftransaction}</td>
                        <td>{item.owner}</td>
                    </tr>
                  )
               
               })}</tbody>
    </Table> )

  }
  }
  else if(this.state.trueval=="batchno"){
    if(this.props.TextBoxValue[1]=="Manufacturer")
    {
      return(
    <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Whey Id</th>
          <th>Batch No.</th>
          <th>Type</th>
          <th>Size</th>
          <th>Flavour</th>
          <th>Time</th>
          <th>Current Owner</th>
        
        </tr>
      </thead>
      <tbody>{this.state.data.filter((item) => item.batchno == this.state.val).map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.assetKey}</td>
                        <td>{item.batchno}</td>
                        <td>{item.Type}</td>
                        <td>{item.Size}</td>
                        <td>{item.Flavour}</td>
                        <td>{item.timeoftransaction}</td>
                        <td>{item.owner}</td>
                    </tr>
                  )
               
               })}</tbody>
    </Table> 
  )
}else{
  return(
    <Table striped bordered hover>
    <thead>
      <tr>
       
        <th>S.No</th>
        <th>Whey Id</th>
        <th>Batch No.</th>
        <th>Type</th>
        <th>Size</th>
        <th>Flavour</th>
        <th>Time</th>
        <th>Current Owner</th>
      
      </tr>
    </thead>
    <tbody>{this.state.data.filter((item) => item.owner == this.state.owner && item.batchno==this.state.val).map(function(item, key) {
               
               return (
                  <tr key = {key}>
                      <td>{item.assetKey}</td>
                      <td>{item.batchno}</td>
                      <td>{item.Type}</td>
                      <td>{item.Size}</td>
                      <td>{item.Flavour}</td>
                      <td>{item.timeoftransaction}</td>
                      <td>{item.owner}</td>
                  </tr>
                )
             
             })}</tbody>
  </Table> )

}
  }
  else if(this.state.trueval=="size"){
    if(this.props.TextBoxValue[1]=="Manufacturer")
    {
      return(
    <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Whey Id</th>
          <th>Batch No.</th>
          <th>Type</th>
          <th>Size</th>
          <th>Flavour</th>
          <th>Time</th>
          <th>Current Owner</th>
        
        </tr>
      </thead>
      <tbody>{this.state.data.filter((item) => item.Size == this.state.val).map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.assetKey}</td>
                        <td>{item.batchno}</td>
                        <td>{item.Type}</td>
                        <td>{item.Size}</td>
                        <td>{item.Flavour}</td>
                        <td>{item.timeoftransaction}</td>
                        <td>{item.owner}</td>
                    </tr>
                  )
               
               })}</tbody>
    </Table> 
  )
}else{
  return(
    <Table striped bordered hover>
    <thead>
      <tr>
       
        <th>S.No</th>
        <th>Whey Id</th>
        <th>Batch No.</th>
        <th>Type</th>
        <th>Size</th>
        <th>Flavour</th>
        <th>Time</th>
        <th>Current Owner</th>
      
      </tr>
    </thead>
    <tbody>{this.state.data.filter((item) => item.owner == this.state.owner && item.Size==this.state.val).map(function(item, key) {
               
               return (
                  <tr key = {key}>
                      <td>{item.assetKey}</td>
                      <td>{item.batchno}</td>
                      <td>{item.Type}</td>
                      <td>{item.Size}</td>
                      <td>{item.Flavour}</td>
                      <td>{item.timeoftransaction}</td>
                      <td>{item.owner}</td>
                  </tr>
                )
             
             })}</tbody>
  </Table> )

}
  }
  else if(this.state.trueval=="flavour"){
    if(this.props.TextBoxValue[1]=="Manufacturer")
    {
      return(
    <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Whey Id</th>
          <th>Batch No.</th>
          <th>Type</th>
          <th>Size</th>
          <th>Flavour</th>
          <th>Time</th>
          <th>Current Owner</th>
        
        </tr>
      </thead>
      <tbody>{this.state.data.filter((item) => item.Flavour == this.state.val).map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.assetKey}</td>
                        <td>{item.batchno}</td>
                        <td>{item.Type}</td>
                        <td>{item.Size}</td>
                        <td>{item.Flavour}</td>
                        <td>{item.timeoftransaction}</td>
                        <td>{item.owner}</td>
                    </tr>
                  )
               
               })}</tbody>
    </Table> 
  )
}else{
  return(
    <Table striped bordered hover>
    <thead>
      <tr>
       
        <th>S.No</th>
        <th>Whey Id</th>
        <th>Batch No.</th>
        <th>Type</th>
        <th>Size</th>
        <th>Flavour</th>
        <th>Time</th>
        <th>Current Owner</th>
      
      </tr>
    </thead>
    <tbody>{this.state.data.filter((item) => item.owner == this.state.owner && item.Flavour==this.state.val).map(function(item, key) {
               
               return (
                  <tr key = {key}>
                      <td>{item.assetKey}</td>
                      <td>{item.batchno}</td>
                      <td>{item.Type}</td>
                      <td>{item.Size}</td>
                      <td>{item.Flavour}</td>
                      <td>{item.timeoftransaction}</td>
                      <td>{item.owner}</td>
                  </tr>
                )
             
             })}</tbody>
  </Table> )

}
  }
  else if(this.state.trueval=="type"){
    if(this.props.TextBoxValue[1]=="Manufacturer")
    {
      return(
    <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Whey Id</th>
          <th>Batch No.</th>
          <th>Type</th>
          <th>Size</th>
          <th>Flavour</th>
          <th>Time</th>
          <th>Current Owner</th>
        
        </tr>
      </thead>
      <tbody>{this.state.data.filter((item) => item.Type == this.state.val).map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.assetKey}</td>
                        <td>{item.batchno}</td>
                        <td>{item.Type}</td>
                        <td>{item.Size}</td>
                        <td>{item.Flavour}</td>
                        <td>{item.timeoftransaction}</td>
                        <td>{item.owner}</td>
                    </tr>
                  )
               
               })}</tbody>
    </Table> 
  )
}else{
  return(
    <Table striped bordered hover>
    <thead>
      <tr>
       
        <th>S.No</th>
        <th>Whey Id</th>
        <th>Batch No.</th>
        <th>Type</th>
        <th>Size</th>
        <th>Flavour</th>
        <th>Time</th>
        <th>Current Owner</th>
      
      </tr>
    </thead>
    <tbody>{this.state.data.filter((item) => item.owner == this.state.owner && item.Type==this.state.val).map(function(item, key) {
               
               return (
                  <tr key = {key}>
                      <td>{item.assetKey}</td>
                      <td>{item.batchno}</td>
                      <td>{item.Type}</td>
                      <td>{item.Size}</td>
                      <td>{item.Flavour}</td>
                      <td>{item.timeoftransaction}</td>
                      <td>{item.owner}</td>
                  </tr>
                )
             
             })}</tbody>
  </Table> )

}
  }
  else if(this.state.trueval=="owner"){
    if(this.props.TextBoxValue[1]=="Manufacturer")
    {
      return(
    <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Whey Id</th>
          <th>Batch No.</th>
          <th>Type</th>
          <th>Size</th>
          <th>Flavour</th>
          <th>Time</th>
          <th>Current Owner</th>
        
        </tr>
      </thead>
      <tbody>{this.state.data.filter((item) => item.owner == this.state.val).map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.assetKey}</td>
                        <td>{item.batchno}</td>
                        <td>{item.Type}</td>
                        <td>{item.Size}</td>
                        <td>{item.Flavour}</td>
                        <td>{item.timeoftransaction}</td>
                        <td>{item.owner}</td>
                    </tr>
                  )
               
               })}</tbody>
    </Table> 
  )
}else{
  return(
    <Table striped bordered hover>
    <thead>
      <tr>
       
        <th>S.No</th>
        <th>Whey Id</th>
        <th>Batch No.</th>
        <th>Type</th>
        <th>Size</th>
        <th>Flavour</th>
        <th>Time</th>
        <th>Current Owner</th>
      
      </tr>
    </thead>
    <tbody>{this.state.data.filter((item) => item.owner == this.state.owner && item.owner==this.state.val).map(function(item, key) {
               
               return (
                  <tr key = {key}>
                      <td>{item.assetKey}</td>
                      <td>{item.batchno}</td>
                      <td>{item.Type}</td>
                      <td>{item.Size}</td>
                      <td>{item.Flavour}</td>
                      <td>{item.timeoftransaction}</td>
                      <td>{item.owner}</td>
                  </tr>
                )
             
             })}</tbody>
  </Table> )

}
  }
  else if(this.state.trueval=="time"){
   
      if(this.props.TextBoxValue[1]=="Manufacturer")
      {
        return(
      <Table striped bordered hover>
        <thead>
          <tr>
           
            <th>S.No</th>
            <th>Whey Id</th>
            <th>Batch No.</th>
            <th>Type</th>
            <th>Size</th>
            <th>Flavour</th>
            <th>Time</th>
            <th>Current Owner</th>
          
          </tr>
        </thead>
        <tbody>{this.state.data.filter((item) => item.timeoftransaction == this.state.val).map(function(item, key) {
                   
                   return (
                      <tr key = {key}>
                          <td>{item.assetKey}</td>
                          <td>{item.batchno}</td>
                          <td>{item.Type}</td>
                          <td>{item.Size}</td>
                          <td>{item.Flavour}</td>
                          <td>{item.timeoftransaction}</td>
                          <td>{item.owner}</td>
                      </tr>
                    )
                 
                 })}</tbody>
      </Table> 
    )
  }else{
    return(
      <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Whey Id</th>
          <th>Batch No.</th>
          <th>Type</th>
          <th>Size</th>
          <th>Flavour</th>
          <th>Time</th>
          <th>Current Owner</th>
        
        </tr>
      </thead>
      <tbody>{this.state.data.filter((item) => item.owner == this.state.owner && item.timeoftransaction==this.state.val).map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.assetKey}</td>
                        <td>{item.batchno}</td>
                        <td>{item.Type}</td>
                        <td>{item.Size}</td>
                        <td>{item.Flavour}</td>
                        <td>{item.timeoftransaction}</td>
                        <td>{item.owner}</td>
                    </tr>
                  )
               
               })}</tbody>
    </Table> )

  }
}
  else if(this.state.trueval=="1")
  {
   if(this.props.TextBoxValue[1]=="Manufacturer")
              {
                return(
                            <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Whey Id</th>
          <th>Batch No.</th>
          <th>Type</th>
          <th>Size</th>
          <th>Flavour</th>
          <th>Time</th>
          <th>Current Owner</th>
        
        </tr>
      </thead>
      <tbody>{this.state.data.map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.assetKey}</td>
                        <td>{item.batchno}</td>
                        <td>{item.Type}</td>
                        <td>{item.Size}</td>
                        <td>{item.Flavour}</td>
                        <td>{item.timeoftransaction}</td>
                        <td>{item.owner}</td>
                    </tr>
                  )
               
               })}</tbody>
    </Table>)}
    else{
      return(
        <Table striped bordered hover>
        <thead>
          <tr>
           
            <th>S.No</th>
            <th>Whey Id</th>
            <th>Batch No.</th>
            <th>Type</th>
            <th>Size</th>
            <th>Flavour</th>
            <th>Time</th>
            <th>Current Owner</th>
          
          </tr>
        </thead>
        <tbody>{this.state.data.filter((item) => item.owner == this.state.owner).map(function(item, key) {
                   
                   return (
                      <tr key = {key}>
                          <td>{item.assetKey}</td>
                          <td>{item.batchno}</td>
                          <td>{item.Type}</td>
                          <td>{item.Size}</td>
                          <td>{item.Flavour}</td>
                          <td>{item.timeoftransaction}</td>
                          <td>{item.owner}</td>
                      </tr>
                    )
                 
                 })}</tbody>
      </Table> )}
  }
  
}

      render() {
        console.log("test:" + this.props.TextBoxValue[1])
        console.log(this.state.data[0])
        if(this.props.TextBoxValue[1]=="Manufacturer")
        {
          this.state.owner=true;
        }
        else if(this.props.TextBoxValue[1]=="Distributor")
        {
        this.state.owner="resource:org.authentication.whey.Distributor#"+this.props.TextBoxValue[0];
        }
        else if(this.props.TextBoxValue[1]=="Retailer")
        {
          this.state.owner="resource:org.authentication.whey.Retailer#"+this.props.TextBoxValue[0];
        }
        
        return (
          <div class="main11">
          <p className="h5 text-center mb-4">WHEY PROTEIN INVENTORY</p>
          <br></br>
                 
<div>
 SEARCH BY :&nbsp;  <select class="sel" onChange={this.handleChange1.bind(this)} value={this.state.option}>
<option value="1">ALL</option>
  <option value="wheyid">Whey Id</option>
  <option value="batchno">Batch No.</option>
  <option value="size">Size</option>
  <option value="flavour">Flavour</option>
  <option value="type">Type</option>
  <option value="time">Time</option>
  <option value="owner">Owner</option>
</select>
&nbsp;
<input type="text" onChange={this.handleChange2.bind(this)} name="search" value={this.state.val}/>
&nbsp;
<input type="submit" class="button3" value="SEARCH"   onClick={(e) => this.ret(this.state.option)} />
</div>
<br></br>
{this.onSubmit()}
   
           </div>
        );
      }
    }
    
export default Inventory;