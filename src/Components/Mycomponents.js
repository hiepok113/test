import React from 'react';


class Mycomponents extends React.Component {
  state = {
    name: 'NTH',
    address: 'tphcm',
    age: 25
  };
  render() {
    return (
      <div>
        hello words
        my name is {this.state.name} come from {this.state.address}
      </div>
    );
  }
}

export default Mycomponents;
