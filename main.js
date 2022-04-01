import './src/styles/settings/color.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import BordGame from './src/object/BoardGame'
import PlayerName from './src/components/PlayerName'


const $root = document.querySelector("#root")
const $htmlBordGame = BordGame(6)
const $htmlPLayerName = PlayerName()

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${PlayerName("PLayer 1")}
    ${PlayerName("PLayer 2")}
    ${BordGame(6)}
    `
)
