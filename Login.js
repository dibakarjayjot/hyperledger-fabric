import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from './PostData';
import './Login.css';
import axios from 'axios';
class Login extends Component {
constructor(){
super();
this.state = {
email: '',
password: '',
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}


login() {
  axios.get("https://learningphp1234.000webhostapp.com/android/reactlogin.php?username=15bcs035@smvdu.ac.in&password=qwerty123&category=student")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

}


onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {


if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
return (<Redirect to={'/home'}/>)
}


return (
<div className="row" id="Body">
<div className="medium-5 columns left">
<h4>Login</h4>
<label>Username</label>
<input type="text" name="email" onChange={this.onChange}/>
<label>Password</label>
<input type="password" name="password" onChange={this.onChange}/>
<input type="submit" value="Login" onClick={this.login}/>
<a href="/signup">Registration</a>
</div>
</div>
);
}
}
export default Login;