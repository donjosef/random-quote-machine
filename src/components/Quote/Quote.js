import React from 'react'

export default function Quote(props) {
    const { quote } = props; //quote is an object received by App as prop
  return (
    <div>
      <p id="text">{quote ? quote.quote : null}</p>
      <span className="author" id="author">&minus; {quote ? quote.author : null}</span>
    </div>
  )
}
