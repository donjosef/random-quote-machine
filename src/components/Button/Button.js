import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

library.add(faRetweet)

export default function Button(props) {
    const { type, click, text, color } = props;

    let btn;
    let btnClass;
    if (type === 'tweet') {
        btnClass = 'btn-tweet';
        btn = <a
            className={btnClass}
            id="tweet-quote" 
            href={`https://twitter.com/intent/tweet?text=${text}&related=freecodecamp&hashtags=quotes`} 
            title="Tweet this quote!">
            <FontAwesomeIcon icon="retweet" color={color}/>
        </a>
    }

    if (type === 'new-quote') {
        btnClass = 'btn-new-quote';
        btn = <button className={btnClass} id="new-quote" onClick={click}>New Quote</button>
    }

    return btn;
}
