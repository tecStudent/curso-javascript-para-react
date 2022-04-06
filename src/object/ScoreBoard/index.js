import PlayerName from "../../components/PlayerName"
import VsPlayer from "../../components/VsPayer"
import "./style.css"

function ScoreBoard(){

    return /*html*/ `
    <header class="score-board">
    ${PlayerName("PLayer 1")}
    ${VsPlayer()}
    ${PlayerName("PLayer 2")}
    </header>
    `
}


export default ScoreBoard