import React from 'react'

export default function Quote(props) {
    const { quote, author } = props
  return (
    <div>
      <p id="text">{quote}</p>
      <span className="author" id="author">&minus; {author}</span>
    </div>
  )
}
