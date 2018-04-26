import React, { Component } from "react";
import HelloHeader from "./HelloHeader.js";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const style = {
  margin: 15
};

class FAQ extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className = "App">
      <HelloHeader/>
      <h1 style={{'font-size': '50px'}}>FAQ Page</h1>
      <div className = "FAQ">

         <h2>What is Hello, World?</h2>
         <p> Hello, World is Messiah College's computer science club,
         where members get to learn about all kinds of things
         related to computers and technology.
         </p>
      </div>
      <br />
      <div className = "FAQ">
      <h2>When/where does the club meet?</h2>
      <p>The club meets in Frey 151, the Computer Science Lounge.
      Typically, meetings are held on Thursdays at 7pm, and run for about an hour.</p>
      </div>
      <br/>
      <div className = "FAQ">
      <h2>What are the meetings about?</h2>
      <p>There are meetings about all kinds of things. Anywhere from learning the ins and outs of GitHub,
      to making your own JavaScript applets!</p>
      </div>
      <br/>
      <div className = "FAQ">
      <h2>Do I have to be a Comp Sci major to join?</h2>
      <p>Nope! The meetings are for anyone and everyone!</p>
      </div>
      <br/>
      <div className = "FAQ">
      <h2>Can I lead a meeting, or suggest a topic for a future one?</h2>
      <p>Absolutely! Contact the club leadership for details. The current
       club president is James Gelok (jg1483@messiah.edu).</p>
      </div>
      <br/>
      <div className = "FAQ">
      <h2>Can one of you fix my computer? It's been acting kind of slow...</h2>
      <p>Have you tried turning it off and on again?<br/>
       (But seriously, you should take it to CSS. They'll be happy to help!)</p>
      </div>
      <br/>
      </div>
    )
  }
}

export default FAQ;
