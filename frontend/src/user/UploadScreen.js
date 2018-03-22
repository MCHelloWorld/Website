import React, { Component} from 'react';
class UploadScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1> Howdy Doody, {this.props.emailFromParent} </h1>
      </div>
    )
  }
}

export default UploadScreen;
