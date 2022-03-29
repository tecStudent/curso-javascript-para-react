import './src/styles/settings/color.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import BordGame from './src/object/BoardGame'


const $root = document.querySelector("#root")
const $htmlBordGame = BordGame(6)
/*
const $htmlplayer1 = Player(1)
const $htmlplayer2 = Player(2)

$root.insertAdjacentHTML("beforeend", $htmlplayer1)
$root.insertAdjacentHTML("beforeend", $htmlplayer2)

*/
$root.insertAdjacentHTML("beforeend", $htmlBordGame)
