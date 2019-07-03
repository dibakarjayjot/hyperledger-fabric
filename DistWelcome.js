import React from 'react';
import {Redirect,BrowserRouter} from 'react-router-dom';

class DistWelcome extends React.Component {
    constructor(){
        super();
        this.state = {
         
            c:false,
            f:false
        };
       
        this.sellwhey = this.sellwhey.bind(this);
        this.transfertoret = this.transfertoret.bind(this);
        }

        transfertoret = () => {
            this.setState({c: true});
        }

        sellwhey = () => {
            this.setState({f: true});
        }



  render() {
 
    if(this.state.c){
        return (
            <Redirect to={{
                pathname: '/transfer2',
                state: { id: this.props.location.state.uid, email:this.props.location.state.ref }
            }} />
      )
      }

      if(this.state.f){
        return (
            <Redirect to={{
                pathname: '/sellWhey',
                state: { id: this.props.location.state.uid, email:this.props.location.state.ref }
            }} />
       )
      }
      
    return (
      <div >
          {this.state.counter}
	
     <input type="submit" value="TRANSFER TO RETAILER" onClick={this.transfertoret}/>
     <input type="submit" value="SELL WHEY" onClick={this.sellwhey}/>
     
      </div>
    );
  }
}

export default DistWelcome;
