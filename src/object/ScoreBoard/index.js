import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore"
import VsPlayer from "../../components/VsPayer"
import "./style.css"

function ScoreBoard(){

    return /*html*/ `
    <header class="score-board">
    ${PlayerName("PLayer 1")}
    ${PlayerScore(1)}
    ${VsPlayer()}
    ${PlayerScore()}
    ${PlayerName("PLayer 2")}
    </header>
    `
}


export default ScoreBoard