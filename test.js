import React from 'react';



class Test extends React.Component {
  constructor(){
    super();
    this.state = {
    name: '',
    subject: '',
    marks:'',
    arr: ["0", "0", "0", "0" ,"0","0"],
    brr:["alice","bob","clare","dean","elon","fred"],
   counter:0,
    maths_highest_marks:0,
    mathstopper:'',
    chemistrytopper:'',
    physicstopper:'',
    physics_highest_marks:0,
    chemistry_highest_marks:0,
    totalmarks:0,
    average:'',
    grand:'',
    toppername:''
    };
    this.check = this.check.bind(this);
    this.onChange = this.onChange.bind(this);
    }

     
    check() {
      this.state.arr.fill(0, 0, 5); 
      var data = require('./test.json'); // forward slashes will depend on the file location

 
     // for(var i = 0; i < data.length; i++) {
       // var obj = data[i];
            for(var i=0;i<data.length;i++)
            {
              this.state.totalmarks=parseFloat(this.state.totalmarks) + parseFloat(data[i].marks);
              if(data[i].marks>60)
              {
               this.state.counter++;
              }

              if(data[i].name=="alice")
              {
                this.state.arr[0] =parseFloat(this.state.arr[0]) + parseFloat(data[i].marks);
              }

              if(data[i].name=="bob")
              {
                this.state.arr[1]=parseFloat(this.state.arr[2]) + parseFloat(data[i].marks);
              }

              if(data[i].name=="clare")
              {
                this.state.arr[2]=parseFloat(this.state.arr[2]) + parseFloat(data[i].marks);
              }

              if(data[i].name=="dean")
              {
                this.state.arr[3]=parseFloat(this.state.arr[3]) + parseFloat(data[i].marks);
              }

              if(data[i].name=="elon")
              {
                this.state.arr[4]=parseFloat(this.state.arr[4]) + parseFloat(data[i].marks);
              }

              if(data[i].name=="fred")
              {
                this.state.arr[5] = parseFloat(this.state.arr[5]) + parseFloat(data[i].marks);
              }


             if(data[i].subject=="maths" && this.state.maths_highest_marks<data[i].marks)
             {
               this.state.maths_highest_marks=data[i].marks;
               this.state.mathstopper=data[i].name;
             }
             if(data[i].subject=="physics" && this.state.physics_highest_marks<data[i].marks)
             {
               this.state.physics_highest_marks=data[i].marks;
               this.state.physicstopper=data[i].name;
             }
             if(data[i].subject=="chemistry" && this.state.chemistry_highest_marks<data[i].marks)
             {
               this.state.chemistry_highest_marks=data[i].marks;
               this.state.chemistrytopper=data[i].name;
             }
             
            }
            this.state.average=parseFloat(this.state.totalmarks)/parseFloat(data.length);
           

            for(var j=0;j<6;j++)
            {
              for(var k=0;k<6;k++)
            {
              if(this.state.arr[k]>this.state.arr[j])
              {
                this.state.grand = this.state.arr[k];
                this.state.toppername = this.state.brr[k];
                            }
            }} 
      
    }
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
      }
    

    render () {
     
     this.check();
      return (
        <div>
       
        
        <p>1</p>
        <p>Highest marks in Maths : {this.state.maths_highest_marks} scored by {this.state.mathstopper}</p>  
        <p> Highest marks in Physics : {this.state.physics_highest_marks} scored by {this.state.physicstopper}</p> 
        <p>Highest marks in Chemistry : {this.state.chemistry_highest_marks} scored by {this.state.chemistrytopper}</p> 
        <p>2</p>
        <p>Average marks: {this.state.average}</p> 
        <p>3</p>
        <p>Total number of students with marks more than 60 : {this.state.counter}</p>  
        <p>4</p>
        <p>Highest marks secured acrosss all subjects : {this.state.grand} scored by {this.state.toppername}</p>
       
        </div>
       
       
      );
    }
  };

export default Test;
