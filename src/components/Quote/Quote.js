import React from 'react'

export default function Quote(props) {
    const { quote } = props; //quote is an object received by App as prop
  return (
    <div className="Quote">
      <p id="text" className="text">{quote ? quote.quote : null}</p>
      <span className="author" id="author">&minus; {quote ? quote.author : null}</span>
    </div>
  )
}
