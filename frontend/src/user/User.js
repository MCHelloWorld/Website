import React, { Component } from 'react';
import './User.css';
import LoginScreen from './LoginScreen';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    }
  }

  componentWillMount() {
    var apiBaseUrl = "http://localhost:5000/api/";
    var self = this;
    var payload={
      irrelavant:"this is irrelavant and unneeded",
    }

    axios.post(apiBaseUrl+'initUser', payload)
    .then(function (response) {
      console.log(response);
      if(response.data.code === 200 $$ response.data!=-1){
        console.log("successful session implemented");
        var uploadScreen=[];
        uploadScreen.push(<UploadScreen appContext={self.props.appContext} User={response.data}/>)
        self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen});

      } else {
        loginPage.push(<LoginScreen parentContext={this}/>);
        this.setState({
          loginPage:loginPage
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    var loginPage=[];

  };

  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
export default User;
