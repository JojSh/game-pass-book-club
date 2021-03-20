import React from 'react'

function GameCard (props) {
  return <section className='game-card'>
    <img className='game-img' src={props.imgUrl} />
    <section className='game-details'>
      <h1 className='game-name'>{props.name}</h1>
      <article className='game-description'>{props.description}</article>
    </section>
  </section>
}

export default GameCard
