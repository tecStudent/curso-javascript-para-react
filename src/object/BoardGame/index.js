import CardGame from "../../components/CardGame"

function BordGame(amountCards) {
    const $htmlCardGame = CardGame()
    const $htmlBordGame = $htmlCardGame.repeat(amountCards)

    return $htmlBordGame    

}
export default BordGame