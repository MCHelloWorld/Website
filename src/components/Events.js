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
    axios
      .get(apiBaseUrl+"event/getevents")
      .then(function(response) {
        console.log(response);
        var array = response.data.data;
        if (response.data.code === 200) {
          console.log("Events retrieved");
          for (var i = 0; i < array.length; i++) {
            var newArray = self.state.localArray.concat({name: array[i].event_name,
                                                         date: array[i].event_date,
                                                         desc: array[i].event_desc});
            self.setState({
              localArray: newArray
            })
          }
        } else if (response.data.code === 500) {
            console.log(response.data.error);
        }
      })
  }

  render() {
    var eventArray = this.state.localArray.map(function(item,i){
        return (
          <div>
          <div className="curved">
            <h2>{item.name} - {item.date}</h2>
            <p>
              {item.desc}
            </p>
          </div>
          <br/>
          </div>
        )
    })
    return (
      <MuiThemeProvider>
        <div className="App">
          <HelloHeader />
          <h1 style={{"fontSize": "50px"}}>Upcoming Events</h1>
          <RaisedButton label="Home" primary={true} style={style} href="/" />
          <br/>
          <h2>
          {eventArray}
          </h2>
        </div>
      </MuiThemeProvider>
    )
  }
}
export default Events;
