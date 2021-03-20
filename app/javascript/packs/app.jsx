// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import GameCard from './GameCard'

const gamName = 'The Gardens Between'
const gamImgUrl = 'https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_TheGardensBetween.jpg'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GameCard name={gamName} imgUrl={gamImgUrl}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
