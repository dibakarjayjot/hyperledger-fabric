import React from 'react';

class Child extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      counter2: 6
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.props.data(this.state.counter2)}>Click me</button><span>{this.state.counter2}</span>
      </div>
    );
  }
}

export default class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      counter: 1
    }
  }

  update(value){
    return () => {
       this.setState({
         counter: value
       });
    }
  }

  render(){
    return(
      <div>
        <span>{this.state.counter}</span>
        <Child data={this.update.bind(this)}/>
      </div>
    );
  }
}
