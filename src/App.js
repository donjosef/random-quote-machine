import React, { Component } from 'react';

import Quote from './components/Quote/Quote';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="quote-box">
        <Quote />
      </div>
    );
  }
}

export default App;
