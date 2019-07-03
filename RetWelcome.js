import React from 'react';
import {Redirect,BrowserRouter} from 'react-router-dom';

class RetWelcome extends React.Component {
    constructor(){
        super();
        this.state = {
            f:false
        };
       this.sellwhey = this.sellwhey.bind(this);
        }

        sellwhey = () => {
            this.setState({f: true});
        }



  render() {
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
	
     <input type="submit" value="SELL WHEY" onClick={this.sellwhey}/>
     
      </div>
    );
  }
}

export default RetWelcome;
