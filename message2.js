import React from "react";
import axios from 'axios';
import { Table,  Button, DropdownButton, MenuItem } from 'react-bootstrap';
import './message2.css';
import Card4 from './card4';
import {Redirect,BrowserRouter} from 'react-router-dom';


class Message2 extends React.Component {
    constructor(){
        super() 
          this.state = {
            checkMount:false,
            data2: [],
            data3:[],
            beta:'1',
            beta2:'1',
            mymsg:'',
            unique:[],
            unique2:[],
            unique3:[],
            counter:0,
            redirectToDashboard:false,
            owner:'nil'
          }
          this.returntodash=this.returntodash.bind(this);
          this.mess=this.mess.bind(this);
          this.send=this.send.bind(this);
          this.getmessages=this.getmessages.bind(this);
          this.arrayUnique=this.arrayUnique.bind(this);
        
      }
   
      componentDidMount() {
        this.state.checkMount=true;
        
          this.interval = setInterval(() => this.getmessages(), 1000);
          
        
  
      }
      componentWillUnmount() {
        this.state.checkMount = false;
      }
      
      returntodash()
      {
        if(this.state.checkMount)
        {
          this.setState({redirectToDashboard:true});
        }
      }
     
      getmessages()
      {

        axios.post('http://35.229.19.138:8080/mymessages/', {
          email: this.props.location.state.ref
        })
        .then((response) => {
          if(this.state.checkMount)
        {
          this.setState({ data2 : response.data.output });      
          var obj = this.state.data2.sort((a,b) => (a.message_id > b.message_id) ? 1 : ((b.message_id > a.message_id) ? -1 : 0)); 
          this.setState({ data3 : obj }); 
          
        

         
          for(var i=0;i<this.state.data3.length;i++)
          {

            let b = this.state.unique.slice(); //creates the clone of the state
            
              b[i] = this.state.data3[i].user_id_to;
            for(var j=0;j<i+1;j++)
            {
              
            if(this.state.unique[j] == b[i] )
            {
              this.setState({counter:1});
            }
          }
          
          if(this.state.counter==0){
            this.setState({unique: b});
          }
          
          this.setState({counter:0});
          }


          for(var i=0;i<this.state.data3.length;i++)
          {

            let a = this.state.unique2.slice(); //creates the clone of the state
            
              a[i] = this.state.data3[i].user_id_from;
            for(var j=0;j<i+1;j++)
            {
              
            if(this.state.unique2[j] == a[i] )
            {
              this.setState({counter:1});
            }
          }
          
          if(this.state.counter==0){
            this.setState({unique2: a});
          }
          
          this.setState({counter:0});
          }

        this.state.unique3 = this.arrayUnique(this.state.unique.concat(this.state.unique2));

        this.setState({beta: this.props.location.state.uid});
        this.setState({beta2: this.props.location.state.ref});
        }
      })

     

      }



      arrayUnique(array) {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
    
        return a;
    }

      mess()
      {
        if(this.state.beta==1)
        {

        return(
          <div class="lay2">
         .
          </div>
        );
        }
        else if(this.state.beta!=1)
        {
          return(
            <div>
              
          {  this.state.data3.filter((item) => (item.user_id_from ==  this.state.beta2 || item.user_id_from ==  this.state.beta ) && (item.user_id_to == this.state.beta || item.user_id_to ==  this.state.beta2) ).map((item, index) => {

 if(item.user_id_from == this.state.beta)
 {
 return (
    
  <div class="row">
  <div class="columny" >
  </div>
  <div class="columny2" >
  {item.user_id_from} :{item.content}
  </div>
    
    </div>
  );
 }
 else  if(item.user_id_from == this.state.beta2)
 {
 return (
     
    <div class="lay3">
       {item.user_id_from} :{item.content}
    </div>
  );
 }
}) }
            </div>
          );

        }

      }
     
      handleChange = (e) => {
        if(this.state.checkMount)
        {
        this.setState({
            mymsg: e.target.value,
        })
      }
    }


    send(from,to,cont,dated)
      {
        if(this.state.beta==1)
        {
alert("click on view messages first");
        }
        else{

        
        axios.post('http://35.229.19.138:8080/sendmessages/', {
          user_id_from: from,
          user_id_to:to,
          content: cont,
          date_created:dated
        })
        .then((response) => {
         
      })
    }
      }
    
      render() { 
        if(this.state.redirectToDashboard)
        {
          return (
    
   
            <Redirect to={{
              pathname: '/dashboard',
              state: {  uid:this.props.location.state.uid , ref:this.props.location.state.uid , utype:this.props.location.state.utype}
          }} />
    
            )
        }
        
        

        var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd ;


        return (
          <div class="mess14">
          <p className="h5 text-center mb-4">{this.props.location.state.ref}</p>
           
            <div class="page">
    <div class="sub">
            {this.mess()}
            </div>
            </div>
            <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
           
           
       
            <label>Your Message : </label>
            
<input type="text" placeholder="Enter something..." name="mymsg" onChange={this.handleChange}/>
<input type="submit"   value="Send" onClick={(e) => this.send(this.state.beta,this.state.beta2,this.state.mymsg,today)}/>
<input type="submit"  value="Dashboard" onClick={(e) => this.returntodash()}/>

</div>
            
           </div>
        );
      }
    }
    
export default Message2;