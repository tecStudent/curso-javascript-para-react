import './src/styles/settings/color.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import Player from "./src/components/Player"
import CardGame from "./src/components/CardGame"


const $root = document.querySelector("#root")
const $htmlCardGame = CardGame()
const $htmlplayer1 = Player(1)
const $htmlplayer2 = Player(2)

$root.insertAdjacentHTML("beforeend", $htmlplayer1)
$root.insertAdjacentHTML("beforeend", $htmlplayer2)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)
/**
 * $root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlCardGame) */ 
