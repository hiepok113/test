import React from 'react';
import Userinfor from './Userinfor';
import Displayinfo from './Displayinfo';


class Mycomponents extends React.Component {
  
  render() {
    const {name , age} = this.props;
    return (
      <div>
        <Userinfor/>
        <br></br>
        <Displayinfo name="NTH" age= "30"/>
        <hr></hr>
        <Displayinfo name="Hiep" age= "21"/>
      </div>
    );
  }
}

export default Mycomponents;
