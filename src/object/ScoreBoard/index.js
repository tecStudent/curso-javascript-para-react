import PlayerName from "../../components/PlayerName"

function ScoreBoard (){

    return /*html*/ `
    <header class="score-board">
    ${PlayerName("PLayer 1")}
    ${PlayerName("PLayer 2")}
    </header>
    `
}


export default ScoreBoard