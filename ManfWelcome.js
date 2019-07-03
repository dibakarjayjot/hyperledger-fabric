import React from 'react';
import {Redirect,BrowserRouter} from 'react-router-dom';

class ManfWelcome extends React.Component {
    constructor(){
        super();
        this.state = {
            a:false,
            b:false,
            c:false,
            d:false,
            e:false,
            f:false
        };
        this.addwhey = this.addwhey.bind(this);
        this.sellwhey = this.sellwhey.bind(this);
        this.adddist = this.adddist.bind(this);
        this.addret = this.addret.bind(this);
        this.transfertodist = this.transfertodist.bind(this);
        this.transfertoret = this.transfertoret.bind(this);
        }

        addwhey = () => {
            this.setState({a: true});
        }

        transfertodist = () => {
            this.setState({b: true});
        }

        transfertoret = () => {
            this.setState({c: true});
        }

        addret = () => {
            this.setState({d: true});
        }

        adddist = () => {
            this.setState({e: true});
        }

        sellwhey = () => {
            this.setState({f: true});
        }



  render() {
    
    if(this.state.a){
        return (
        <Redirect to={{
            pathname: '/addWhey',
            state: { id: this.props.location.state.uid, email:this.props.location.state.ref }
        }} />
        
        )
      }

      if(this.state.b){
        return (
            <Redirect to={{
                pathname: '/transfer1',
                state: { id: this.props.location.state.uid, email:this.props.location.state.ref }
            }} />
       )
      }

      if(this.state.c){
        return (
            <Redirect to={{
                pathname: '/transfer2',
                state: { id: this.props.location.state.uid, email:this.props.location.state.ref }
            }} />
      )
      }

      if(this.state.d){
        return (
            <Redirect to={{
                pathname: '/addRetailer',
                state: { id: this.props.location.state.uid, email:this.props.location.state.ref }
            }} />
        )
      }

      if(this.state.e){
        return (
            <Redirect to={{
                pathname: '/addDistributor',
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
          hi
          <br></br>
          hi
          <br></br>
          hi
          <br></br>
          hi
          <br></br>
          hi
          <br></br>
          hi
          <br></br>
          hi
          <br></br>
          {this.state.counter}
	 <input type="submit" value="ADD WHEY" onClick={this.addwhey}/>
     <input type="submit" value="TRANSFER TO DISTRIBUTOR" onClick={this.transfertodist}/>
     <input type="submit" value="TRANSFER TO RETAILER" onClick={this.transfertoret}/>
     <input type="submit" value="ADD DISTRIBUTOR" onClick={this.adddist}/>
     <input type="submit" value="ADD RETAILER" onClick={this.addret}/>
     <input type="submit" value="SELL WHEY" onClick={this.sellwhey}/>
     
      </div>
    );
  }
}

export default ManfWelcome;
