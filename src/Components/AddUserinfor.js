import React from "react";

class AddUserinfor extends React.Component {
  state = {
    name: 'hiep',
    address: 'tphcm',
    age: 25
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  handleonSubmit = (event) => {
    event.preventDefault();

    this.props.handleAddNewUser({
      id: Math.floor((Math.random() * 100) + 1) + "random",
      name: this.state.name,
      age: this.state.age
    });
  }
  render() {
    return (
      <div>
        hello words
        my name is {this.state.name} come from {this.state.address} and im {this.state.age}

        <form onSubmit={(event) => this.handleonSubmit(event)}>
          <label>Your name : </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />

          <label>Your age : </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>submit</button>
        </form>
      </div>
    )
  }
}
export default AddUserinfor;