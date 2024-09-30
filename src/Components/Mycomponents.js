import React from 'react';


class Mycomponents extends React.Component {
  state = {
    name: 'NTH',
    address: 'tphcm',
    age: 25
  };
  handleClick(){
    console.log(">>click me my button");
    //merge state =>react class
    this.setState({
      name:'hiepok',
      age  : Math.floor((Math.random()*100)+1)
    })
  

  }
  handleOnMoverOver(event){
    // console.log(event.pageX)
  }
  render() {
    return (
      <div>
        hello words
        my name is {this.state.name} come from {this.state.address} and im {this.state.age}
        <button onMouseOver={this.handleOnMoverOver}>hover me </button>
        <button onClick={(event)=>{this.handleClick()}}>click me </button>
      </div>
    );
  }
}

export default Mycomponents;
