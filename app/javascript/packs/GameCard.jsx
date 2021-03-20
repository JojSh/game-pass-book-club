import React from 'react'

function GameCard (props) {
  return <section>
    <div>Game:{props.name}!</div>
    <img src={props.imgUrl} />
  </section>
}

export default GameCard