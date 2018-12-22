import React, { Component } from 'react';

import Quote from './components/Quote/Quote';
import Button from './components/Button/Button';
import './App.css';

class App extends Component {
  state = {
    quote: null,
    randomColor: null
  }

  componentDidMount() {
    this.getQuote();

    const r = this.toHexColor(Math.floor(Math.random() * 256));
    const g = this.toHexColor(Math.floor(Math.random() * 256));
    const b = this.toHexColor(Math.floor(Math.random() * 256));
    this.setState({ randomColor: `#${r}${g}${b}` });

  }

  toHexColor = (n) => {
    /* Avoid number with one digit */
    if (n < 16) {
      return '0' + Math.abs(n).toString(16);
    }
    return Math.abs(n).toString(16);
  }

  getQuote = () => {
    fetch('https://talaikis.com/api/quotes/random/')
      .then(res => res.json())
      .then(data => {
        this.setState({ quote: data })
      });
  }

  getQuoteHandler = () => {
    this.getQuote();
  }

  render() {
    return (
      <div className="wrapper" style={{background: this.state.randomColor}}>
        <div className="App" id="quote-box">
          <Quote quote={this.state.quote} color={this.state.randomColor}/>
          <Button type="tweet" text={this.state.quote ? this.state.quote.quote : ''} />
          <Button type="new-quote" click={this.getQuoteHandler} />
        </div>
      </div>
    );
  }
}

export default App;
