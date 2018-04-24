import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import ImageLoader from "react-image-file";
import ImageUploadField from "react-image-file/ImageUploadField";

// Handles the uploading of image files
// class ImageUploader extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       files: []
//     };
//   }
//   onFilesChange = (files: File[]) => {
//     this.setState({ files });
//   };
//   handleClick(event) {
//     var apiUrl = 'http://localhost:5000/api/user.images';
//     var self = this;
//     var payload = {email: this.props.Email};
//   };
//
// }
