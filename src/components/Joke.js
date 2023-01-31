import React from 'react'

const Joke = ({joke}) => {
  return (
    <div className='jokeContainer'>
        <blockquote>"{joke}"</blockquote>
    </div>
  )
}

export default Joke