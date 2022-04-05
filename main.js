import './src/styles/settings/color.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'


import ScoreBoard from './src/object/ScoreBoard'
import BoardGame from './src/object/BoardGame'


const $root = document.querySelector("#root")

$root.insertAdjacentHTML(
    "beforeend",    `
    ${ScoreBoard()}
    ${BoardGame(2)}
    `
)
