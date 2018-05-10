import React, { Component } from "react";
import HelloHeader from "./HelloHeader.js";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";

const style = {
  margin: 15
};

class Events extends Component{
  constructor(props) {
    super(props);
    this.state={
      localArray: []
    };
  }

  componentWillMount() {
    var apiBaseUrl = "http://localhost:5000/api/";
    var self = this;
    var payload = {};

    axios
      .get(apiBaseUrl+"Event/getEvents")
      .then(function(response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Events retrieved");
          for (i=0; i < response.data.array.length; i++) { // array to be changed to diff variable name based on Sam's code
            this.state.localArray[i] = array[i];
          }
        } else if (response.data.code === 500) {
            console.log(response.data.error);
        }
      })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <HelloHeader />
          <h1 style={{"font-size": "50px"}}>Upcoming Events</h1>
          <RaisedButton label="Home" primary={true} style={style} href="/" />
          <br/>
          <h2>
            {this.state.localArray.map(event => {
              return( <div key = {event.event_name}>
                      <dt>{event.event_name}</dt>
                      <dd>{event.date}</dd>
                      <dd>{event.event_desc}</dd>
                      </div>
                    )
            })
          }
          </h2>
        </div>
      </MuiThemeProvider>
    )
  }
}
export default Events;
