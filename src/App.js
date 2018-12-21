import React, { Component } from 'react';

import Quote from './components/Quote/Quote';
import Button from './components/Button/Button';
import './App.css';

class App extends Component {
  state = {
    quote: null
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    fetch('https://talaikis.com/api/quotes/random/')
    .then(res => res.json())
    .then(data => {
      this.setState({quote: data})
    });
  }

  getQuoteHandler = () => {
    this.getQuote();
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Quote quote={this.state.quote}/>
        <Button type="tweet"/>
        <Button type="new-quote" click={this.getQuoteHandler}/>
      </div>
    );
  }
}

export default App;
