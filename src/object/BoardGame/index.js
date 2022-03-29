import './style.css'
import CardGame from "../../components/CardGame"

function BordGame(amountCards) {
    const $htmlCardGame = CardGame()
    const $htmlContent = $htmlCardGame.repeat(amountCards)

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `    

}
export default BordGame