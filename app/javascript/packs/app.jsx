// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import GameCard from './GameCard'

const gamName = 'The Gardens Between'
const gamImgUrl = 'https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_TheGardensBetween.jpg'
const gamDescription = `The Gardens Between is an adventure puzzle game where you guide two best friends through a surreal world of mysterious garden islands. But you don't control the characters – you control time.
  Arina, a headstrong girl, and Frendt, a boy wise beyond his years, fall into a series of vibrant, dreamlike island gardens peppered with everyday objects that hold a special significance to the duo.
  Together they embark on an emotional journey that examines the significance of their friendship: the memories they’ve built, what must be let go, and what should never be left behind.
  Designed as an homage to the enduring power of friendship, The Gardens Between places you in control of not the characters themselves, but the force which will change and shape their relationship: time.
  In the mysterious realm they find themselves transported to, cause and effect are malleable and time flows in all directions. As the duo explore the gardens, they tinker with memories gone by and negotiate how they are remembered.
  Solve puzzles to reach the apex of each isle and light up constellations of memories, illuminating threads of a bittersweet narrative.
`

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GameCard
      name={gamName}
      imgUrl={gamImgUrl}
      description={gamDescription}
    />,
    document.body.appendChild(document.createElement('div')),
  )
})
