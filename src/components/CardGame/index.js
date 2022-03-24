import './style.css'

function CardGame() {
    return `
        <input type="checkbox" id="swith" />

        <div class="card-container">
            <div class="card-flipper">
                <div class="card-front">
                    <article class="card-game">
                        <img src="images/alura-pixel.png" alt="Logo da Alura">
                    </article>
                </ div>
                <div class="card-back">
                    <article class="card-game">
                        <img src="images/logo-css.png" alt="Logo do Css">
                    </article>
                </ div>
            </div>
        </div>
        

        
    `
}

export default CardGame