import React, { Component } from 'react';

import Quote from './components/Quote/Quote';
import Button from './components/Button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="quote-box">
        <Quote />
        <Button type="tweet"/>
        <Button type="new-quote"/>
      </div>
    );
  }
}

export default App;
