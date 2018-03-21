import React, { Component} from 'react';
class UploadScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:''
    };
  }
  render() {
    return (
      <div>
      <h1> Howdy Doody, {this.state.email} </h1>
      </div>
    )
  }
}

export default UploadScreen;
