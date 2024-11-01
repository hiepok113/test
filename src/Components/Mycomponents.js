import React from 'react';
import Userinfor from './Userinfor';
import Displayinfo from './Displayinfo';


class Mycomponents extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Phuong", age: "18" },
      { id: 2, name: "hiep", age: "12" },
      { id: 3, name: "Lon", age: "29" }

    ]
  }

  render() {

    return (
      <div>
        <Userinfor />
        <br></br>
        <Displayinfo listUser={this.state.listUser} />
      </div>
    );
  }
}

export default Mycomponents;
