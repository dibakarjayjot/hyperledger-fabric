import React from 'react';
import axios from 'axios';
import './addWhey.css';
import { Alert,Form,Col,Row,Button } from 'react-bootstrap';

class addWhey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          type: 'select',
          flavour: 'select',
          flav1: 'select',
          flav2: 'select',
          flav3: 'select',
          flav4: 'select',
          flavarr:["","","",""],
          size: 'select',
          number:'',
          trueval:"1",
          cssval1:"column78",
          cssval2:"column77",
          counter:0
        };
    this.ret = this.ret.bind(this);
    this.re2 = this.ret.bind(this);
}

ret(val)
{
  this.setState({trueval: val});
  if(val==1){
    this.setState({cssval1:"column78"});
    this.setState({cssval2:"column77"});
  }
  if(val==2)
  {
    this.setState({cssval2:"column78"});
    this.setState({cssval1:"column77"});
  }

}
ret2()
{
  if(this.state.trueval==1)
  {
  return(
<div>
<p className="h5 text-center mb-4">ADD WHEY PROTEIN BATCH(4X) - SAME FLAVOUR </p>

    <Form>
<Form.Group  controlId="fd">
  <Form.Label >
    Quantity:
  </Form.Label>
  
    <Form.Control type="text" placeholder="Specify number of batches to be added"  onChange={this.handleChange4.bind(this)} value={this.state.number} />
  
</Form.Group>

<Form.Group controlId="type">

  <Form.Label>Type :</Form.Label>
  <Form.Control as="select" id="labs" onChange={this.handleChange1.bind(this)} value={this.state.type}>
  <option value="select">Select the type</option>
    <option value="CONCENTRATE">CONCENTRATE</option>
    <option value="ISOLATE">ISOLATE</option>
    <option value="HYDROLYZED">HYDROLYZED</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="flavour">
  <Form.Label>Flavour :</Form.Label>
  <Form.Control as="select" id="abs" onChange={this.handleChange2.bind(this)} value={this.state.flavour}>
  <option value="select">Select the flavour</option>
    <option value="BANANA_CREAM">BANANA CREAM</option>
    <option value="CAFE_MOCHA">CAFE MOCHA</option>
    <option value="COOKIES_AND_CREAM">COOKIES AND CREAM</option>
    <option value="RICH_MILK_CHOCOLATE">RICH MILK CHOCOLATE</option>
    <option value="VANILLA">VANILLA	</option>
    <option value="STRAWBERRY">STRAWBERRY</option>
    <option value="LIGHT">LIGHT</option>
    <option value="MEDIUM">MEDIUM</option>
    <option value="DARK">DARK</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="size">
  <Form.Label>Size :</Form.Label>
  <Form.Control as="select"  id="lang" onChange={this.handleChange3.bind(this)} value={this.state.size}>

        <option value="select">Select the size</option>
        <option value="small">SMALL</option>
        <option value="medium">MEDIUM</option>
        <option value="large">LARGE</option>
    
      </Form.Control>
      </Form.Group>
    <div className="text-center">
      <Button variant="outline-success" size="lg"   onClick={(e) => this.onSubmit(e)}>
        ADD BATCH
      </Button>
      </div>
      </Form>
      </div>
  )
  }
  else if(this.state.trueval==2)
  {
    return(
<div>
<p className="h5 text-center mb-4">ADD WHEY PROTEIN BATCH(4X) - DIFFERENT FLAVOUR </p>

      <Form>
<Form.Group  controlId="fd">
  <Form.Label >
    Quantity:
  </Form.Label>
  
    <Form.Control type="text" placeholder="Specify number of batches to be added"  onChange={this.handleChange4.bind(this)} value={this.state.number} />
  
</Form.Group>

<Form.Group controlId="type">

  <Form.Label>Type :</Form.Label>
  <Form.Control as="select" id="labs" onChange={this.handleChange1.bind(this)} value={this.state.type}>
  <option value="select">Select the type</option>
    <option value="CONCENTRATE">CONCENTRATE</option>
    <option value="ISOLATE">ISOLATE</option>
    <option value="HYDROLYZED">HYDROLYZED</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="flavour1">
  <Form.Label>Flavour1 :</Form.Label>
  <Form.Control as="select" id="abs" onChange={this.handleChange5.bind(this)} value={this.state.flav1}>
  <option value="select">Select the flavour</option>
    <option value="BANANA_CREAM">BANANA CREAM</option>
    <option value="CAFE_MOCHA">CAFE MOCHA</option>
    <option value="COOKIES_AND_CREAM">COOKIES AND CREAM</option>
    <option value="RICH_MILK_CHOCOLATE">RICH MILK CHOCOLATE</option>
    <option value="VANILLA">VANILLA	</option>
    <option value="STRAWBERRY">STRAWBERRY</option>
    <option value="LIGHT">LIGHT</option>
    <option value="MEDIUM">MEDIUM</option>
    <option value="DARK">DARK</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="flavour2">
  <Form.Label>Flavour2 :</Form.Label>
  <Form.Control as="select" id="abs" onChange={this.handleChange6.bind(this)} value={this.state.flav2}>
  <option value="select">Select the flavour</option>
    <option value="BANANA_CREAM">BANANA CREAM</option>
    <option value="CAFE_MOCHA">CAFE MOCHA</option>
    <option value="COOKIES_AND_CREAM">COOKIES AND CREAM</option>
    <option value="RICH_MILK_CHOCOLATE">RICH MILK CHOCOLATE</option>
    <option value="VANILLA">VANILLA	</option>
    <option value="STRAWBERRY">STRAWBERRY</option>
    <option value="LIGHT">LIGHT</option>
    <option value="MEDIUM">MEDIUM</option>
    <option value="DARK">DARK</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="flavour3">
  <Form.Label>Flavour3 :</Form.Label>
  <Form.Control as="select" id="abs" onChange={this.handleChange7.bind(this)} value={this.state.flav3}>
  <option value="select">Select the flavour</option>
    <option value="BANANA_CREAM">BANANA CREAM</option>
    <option value="CAFE_MOCHA">CAFE MOCHA</option>
    <option value="COOKIES_AND_CREAM">COOKIES AND CREAM</option>
    <option value="RICH_MILK_CHOCOLATE">RICH MILK CHOCOLATE</option>
    <option value="VANILLA">VANILLA	</option>
    <option value="STRAWBERRY">STRAWBERRY</option>
    <option value="LIGHT">LIGHT</option>
    <option value="MEDIUM">MEDIUM</option>
    <option value="DARK">DARK</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="flavour4">
  <Form.Label>Flavour4 :</Form.Label>
  <Form.Control as="select" id="abs" onChange={this.handleChange8.bind(this)} value={this.state.flav4}>
  <option value="select">Select the flavour</option>
    <option value="BANANA_CREAM">BANANA CREAM</option>
    <option value="CAFE_MOCHA">CAFE MOCHA</option>
    <option value="COOKIES_AND_CREAM">COOKIES AND CREAM</option>
    <option value="RICH_MILK_CHOCOLATE">RICH MILK CHOCOLATE</option>
    <option value="VANILLA">VANILLA	</option>
    <option value="STRAWBERRY">STRAWBERRY</option>
    <option value="LIGHT">LIGHT</option>
    <option value="MEDIUM">MEDIUM</option>
    <option value="DARK">DARK</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="size">
  <Form.Label>Size :</Form.Label>
  <Form.Control as="select"  id="lang" onChange={this.handleChange3.bind(this)} value={this.state.size}>

        <option value="select">Select the size</option>
        <option value="small">SMALL</option>
        <option value="medium">MEDIUM</option>
        <option value="large">LARGE</option>
    
      </Form.Control>
      </Form.Group>
    <div className="text-center">
      <Button variant="outline-success" size="lg"   onClick={(e) => this.onSubmit(e)}>
        ADD BATCH
      </Button>
      </div>
      </Form>
      </div>
    )

  }
}


    
    handleChange1 = (e) => {
        this.setState({
            type: e.target.value,
        })
    }
    handleChange2 = (e) => {
      this.setState({
          flavour: e.target.value,
      })
  }
  handleChange3 = (e) => {
    this.setState({
        size: e.target.value,
    })
}

handleChange4 = (e) => {
  this.setState({
      number: e.target.value,
  })
}

handleChange5 = (e) => {
  this.setState({
      flav1: e.target.value,
  })
}
handleChange6 = (e) => {
  this.setState({
      flav2: e.target.value,
  })
}
handleChange7 = (e) => {
  this.setState({
      flav3: e.target.value,
  })
}
handleChange8 = (e) => {
  this.setState({
      flav4: e.target.value,
  })
}


    onSubmit = (e) => {
      if(this.state.type=="select"  || this.state.size=="select")
      {
        window.confirm("Please select all options"); 
      }
      else
      {
               e.preventDefault();
       const form = {
      
        manufacturerid: "string",
  type: "ISOLATE",
  flavour: "VANILLA",
  size: "small"
       }
       var batchx = Math.random().toString(36).substring(3);
       var flav='';
       console.log(batchx)
        
       var j=0;
         for(var i=0;i<this.state.number*4;i++)
         {
           if(this.state.trueval==1)
           {
             flav = this.state.flavour;
           }
           else if(this.state.trueval==2)
            {
              
              if(j==0){
            flav=this.state.flav1;
              }

            if(j==1){
              flav=this.state.flav2;
            }
            

            if(j==2){
              flav=this.state.flav3;
            }
            

            if(j==3)
            {
              flav=this.state.flav4;
            }
           
             j++;

            }
           

           if(i%4==0  && i>0)
           {
            batchx = Math.random().toString(36).substring(3);
            console.log(batchx)
            j=0;
           }

            {/* Send data to API*/}
         var authOptions = {
          method: 'post',
          url: 'http://35.229.19.138:3000/api/org.authentication.whey.addwhey',
          data: JSON.stringify({"email": this.props.TextBoxValue[0],"batchno":batchx,"type": this.state.type,"flavour": flav,"size": this.state.size}),
          headers: {
            'Content-Type': 'application/json'
           },
          json: true
         };
           
      axios(authOptions)
         .then((response) => {
            if(response.status==200){
             this.state.counter=this.state.counter+1;
             if(this.state.counter==this.state.number)
             {
               alert(this.state.number+" Whey Protein batch added successfully")
             }

            }
            else{
              alert("Something went wrong")
            }
            
             })
         .catch((error) => {
            alert(error)
           })
          }
          
        
        }
    }



  render() {
   
    return (
<div class="main2">

   <section class="tabular">
   <div class="retro">
 <div class="row">
  <div class={this.state.cssval1}>
  <button class="tablinks" onClick={(e) => this.ret(1)}>ADD BATCH(4X) <br></br> SAME FLAVOUR  </button>
  </div>
 <div class={this.state.cssval2}>
  <button class="tablinks" onClick={(e) => this.ret(2)}>ADD BATCH(4X)<br></br> DIFFERENT FLAVOUR</button>
  </div>
  
  </div>
</div>
   </section>
{this.ret2()}   
       </div>
    );
  }
}

export default addWhey;
