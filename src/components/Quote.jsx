import React from 'react'

const Quote = ({ quote: { text, author } }) => {
    return (
        <p>{text}<br /><span>- {author}</span></p>
    )
}

export default Quote
