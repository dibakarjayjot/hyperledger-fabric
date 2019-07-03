import React from "react";
import axios from 'axios';
import { Table,  Button, DropdownButton, MenuItem } from 'react-bootstrap';
import './message.css';
import Card4 from './card4';
import {Redirect,BrowserRouter} from 'react-router-dom';



class Message extends React.Component {
    constructor(){
        super() 
          this.state = {
            checkMount:false,
            popupVisible: false,
            data2: [],
            data3:[],
            data4:[],
            beta:'1',
            beta2:'1',
            mymsg:'',
            msgid:[],
            unique:[],
            unique2:[],
            unique3:[],
            counter:0,
            temp:0,
            message2:false,
            owner:'nil'
          }
          this.mapper=this.mapper.bind(this);
          this.getmessages=this.getmessages.bind(this);
          this.arrayUnique=this.arrayUnique.bind(this);
          this.handleClick = this.handleClick.bind(this);
          this.handleOutsideClick = this.handleOutsideClick.bind(this);
          this.getemails= this.getemails.bind(this);
      
        
      }

      handleClick() {
        if(this.state.checkMount)
        {
        this.getemails();
        if (!this.state.popupVisible) {
          // attach/remove event handler
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.setState(prevState => ({
           popupVisible: !prevState.popupVisible,
        }));
      }
    }
      
      handleOutsideClick(e) {
        this.handleClick();
      }


      componentDidMount() {
        this.state.checkMount=true;
      
        this.interval = setInterval(() => this.getmessages(), 1000);
      
    }

    componentWillUnmount() {
      this.state.checkMount=false;
    }

      getemails()
      {
        axios.post('http://35.229.19.138:8080/emails/')
        .then((response) => {
    // handle success
    if(this.state.checkMount)
    {
    this.setState({data4:response.data.output})
    }
  })
     
      }
      
     
      getmessages()
      {

        axios.post('http://35.229.19.138:8080/mymessages/', {
          email: this.props.TextBoxValue[0]
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
        
        for(var h=0;h<this.state.unique3.length;h++)
        {
          for(var g=0;g<this.state.data3.length;g++)
          {
          if((this.state.unique3[h]!=this.props.TextBoxValue[0]) && ( (this.state.data3[g].user_id_from == this.state.unique3[h] && this.state.data3[g].user_id_to == this.props.TextBoxValue[0]) || (this.state.data3[g].user_id_to == this.state.unique3[h] && this.state.data3[g].user_id_from == this.props.TextBoxValue[0])))
          {
            this.state.msgid[h] = this.state.data3[g].message_id;

          }
        }
        if( this.state.msgid[h] == null)
        {
          this.state.msgid[h] = 0;
        }
        if( this.state.unique3[h] == null)
        {
          this.state.unique3[h] = this.props.TextBoxValue[0];
        }
      }
    
     
      for(var l=0;l<this.state.unique3.length;l++)
      {
        for(var o=l;o<this.state.unique3.length;o++)
      {
        if(this.state.msgid[l]<this.state.msgid[o])
        {
          this.state.temp=this.state.msgid[l];
          this.state.msgid[l]=this.state.msgid[o];
          this.state.msgid[o]=this.state.temp;

         this.state.temp=this.state.unique3[l];
          this.state.unique3[l]=this.state.unique3[o];
          this.state.unique3[o]=this.state.temp;

        }
      }
    }
  }
      })

      }


      mapper(val,val2)
      {
        if(this.state.checkMount)
        {
        this.setState({beta: val});
        this.setState({message2: true});
        this.setState({beta2: val2});
        }
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


      render() { 
if(this.state.message2)
{
  return (


    <Redirect to={{
      pathname: '/chat',
      state: { uid: this.props.TextBoxValue[0],ref:this.state.beta2,utype:this.props.TextBoxValue[1]}
  }} />

    )
}
        return (


          <div class="main14">
          <p className="h5 text-center mb-4">My messages</p>
          <div className="popover-container" ref={node => { this.node = node; }}>
        <button
          onClick={this.handleClick}
          class="trybutton">
         + New
        </button>
        {this.state.popupVisible && (
          <div
            className="popover"
          >
         
{
  this.state.data4.filter((item) => item.email != this.props.TextBoxValue[0] ).map((item, index) => {
   
   return (
      
        <div class="lab">
  
  <div class="row">
      <button class="tablinks" onClick={(e) => this.mapper(this.props.TextBoxValue[0],item.email)}>
       <div class="columnx2" >
      <img src="https://cdn-images-1.medium.com/max/1200/1*MccriYX-ciBniUzRKAUsAw.png" width="20px" height="20px"/> 
       </div>
      <div class="columnx">
      &nbsp;&nbsp;&nbsp; {item.email}  
      <br></br>
      </div>
      </button>
  
  </div>
  
  </div>
       
    );
  })
  
  }
          </div>
         )}
      </div>
           
          <br></br>
            {
this.state.unique3.filter((item) => item != this.props.TextBoxValue[0] ).map((item, index) => {
  for(var i=0;i<this.state.data3.length;i++)
  {
   if((this.state.data3[i].user_id_from == item && this.state.data3[i].user_id_to == this.props.TextBoxValue[0]) || this.state.data3[i].user_id_from == this.props.TextBoxValue[0] && this.state.data3[i].user_id_to == item)
   {
     var last = this.state.data3[i].content;
     var lastdate = this.state.data3[i].date_created.substring(0, 10);
   }
  }
 return (
    
      <div class="lab">

<div class="row">
    <button class="tablinks" onClick={(e) => this.mapper(this.props.TextBoxValue[0],item)}>
     <div class="columnx2" >
    <img src="https://cdn-images-1.medium.com/max/1200/1*MccriYX-ciBniUzRKAUsAw.png" width="30px" height="30px"/> 
     </div>
    <div class="columnx">
    {item}  
    <br></br>
   <font color="grey">{last}</font> 
    </div>
 
  <div class="columnx3">
   {lastdate}
     </div>
    </button>

</div>

</div>
     
  );
})

}
 
           </div>
        );
      }
    }
    
export default Message;
