import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore"
import VsPlayer from "../../components/VsPayer"
import "./style.css"

function ScoreBoard(){

    return /*html*/ `
    <header class="score-board">
    ${PlayerName("Player 1")}
    ${PlayerScore(1)}
    ${VsPlayer()}
    ${PlayerScore(2)}
    ${PlayerName("Player 2")}
    </header>
    `
}


export default ScoreBoard