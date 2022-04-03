import './src/styles/settings/color.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import BordGame from './src/object/BoardGame'

import ScoreBoard from './src/object/ScoreBoard'


const $root = document.querySelector("#root")

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${ScoreBoard}
    ${BordGame(6)}
    `
)
