import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// We need to call super() because our Counter class is extending React.Component class as instance
class Counter extends Component {
  constructor() {
    super();
    // State (data) is always a JS object
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }
  // this.state is immutable, must ask React to make the update for using this.setState
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  //Now we're ready to include the value on our state when we render, and attach the "increment" function to the button's click listener. In JSX, we use a single pair of curly braces to evaluate a JavaScript expression.
  //
  //Render this.state.count into the place where the count should go, and attach "increment" as the callback to the button's onClick event like so:
  render() {
    return (
      <div id="container">
        <div id="navbar">Counter.js</div>
        <div id="counter">
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
