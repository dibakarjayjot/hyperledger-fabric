import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ' ',
            country: ' '
        };
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
       e.preventDefault();
       const form = {
        name: this.state.name,
        country: this.state.country
       }
         {/* Send data to API*/}
         var authOptions = {
          method: 'post',
          url: 'http://localhost:3000/api/org.authentication.whey.addDistributor',
          data: JSON.stringify({"name": this.state.name,"country": this.state.country}),
          headers: {
            'Content-Type': 'application/json'
           },
          json: true
         };
      axios(authOptions)
         .then((response) => {
             console.log(response);
             })
         .catch((error) => {
            alert(error)
           })
      
    }
    
    render() {
        return (
            <div>
            <form>
                <label>
                    Name:
                    <input
                        name='name'
                        value={this.state.name}
                        onChange={e => this.handleChange(e)}/>
                </label>
                <label>
                    Country:
                    <input 
                        name='country'
                        value={this.state.country} 
                        onChange={e => this.handleChange(e)}/>
                </label>
                <button onClick={(e) => this.onSubmit(e)}>POST</button>         
            </form>
            </div>
        );
    }
    }

   export default Post;
  
