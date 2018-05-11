import React, {Component} from 'react';
import Upload from 'material-ui-upload/Upload';

class ImageUploader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: this.props.Email
      }
    }
    onFileLoad = (e, file) => console.log(e.target.result, file.name);

    render() {
        return (
            <Upload label="Add" onFileLoad={this.onFileLoad}/>
        );
    }
}

export default ImageUploader;
