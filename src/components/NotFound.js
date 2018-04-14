import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Um error 404 lol</h1>
          <Link to="/" className="App-title">
            click here to go back
          </Link>
        </header>
      </div>
    )
  }
}

export default NotFound
