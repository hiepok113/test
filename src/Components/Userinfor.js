import React from "react";

class Userinfor extends React.Component{
    state = {
    name: 'hiep',
    address: 'tphcm',
    age: 25
  };
  
  handleOnChangeInput=(event)=>{
    this.setState({
      name : event.target.value
    })
  }
  handleOnChangeAge=(event)=>{
    this.setState({
      age : event.target.value
    })
  }
  
  handleonSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state)
  }
    render(){
        return(
            <div>
        hello words
         my name is {this.state.name} come from {this.state.address} and im {this.state.age}
        
        <form onSubmit={(event)=>this.handleonSubmit(event)}>
        <label>Your name : </label>
          <input
          value={this.state.name}
           type = "text" 
           onChange={(event)=>this.handleOnChangeInput(event)}
          />
          <button>submit</button> 
          <label>Your age : </label>
          <input
          value={this.state.age}
           type = "text" 
           onChange={(event)=>this.handleOnChangeAge(event)}
          />
          <button>submit</button> 
        </form>
            </div>
        )
    }
}
export default Userinfor;