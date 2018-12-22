import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faQuoteLeft)

export default function Quote(props) {
    const { quote, color } = props; //quote is an object received by App as prop
  return (
    <div className="Quote">
      <p id="text" className="text" style={{color}}>
        <FontAwesomeIcon icon="quote-left" color={color}/>
        {quote ? ' ' + quote.quote : null}
      </p>
      <span className="author" id="author" style={{color}}>&minus; {quote ? quote.author : null}</span>
    </div>
  )
}
