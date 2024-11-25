import React from 'react';
import AddUserinfor from './AddUserinfor';
import Displayinfo from './Displayinfo';


class Mycomponents extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Phuong", age: "18" },
      { id: 2, name: "hiep", age: "12" },
      { id: 3, name: "Lon", age: "29" }

    ]
  }
  handleAddNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUser: [userObj, ...this.state.listUser]
    })
  }

  render() {

    
    return (
      <>
      <div className='a'>
        <AddUserinfor handleAddNewUser={this.handleAddNewUser}
        />
        <br></br>
        <Displayinfo
          listUser={this.state.listUser}

        />
      </div>
      <div className='b'>

      </div>
      </>
    );
  }
}

export default Mycomponents;
