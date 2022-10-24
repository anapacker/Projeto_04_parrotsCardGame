let numDeCartas;

const cartas = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'

];

const baralho = [];

perguntarQtdCartas();
preencherBaralhoAleatoriamente();
mostrarCartas();

let firstCard, secondCard;

let wins = 0;
let plays = 0;

//declarações de funções

function randomizar() {
    return Math.random() - 0.5;

}
function flipCard() {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    firstCard = undefined;
    secondCard = undefined;

}
function clicarNaCarta(flippedCardElement) {

    plays++;
    if (firstCard === undefined) {
        firstCard = flippedCardElement;


    } else {
        if (secondCard === undefined) {
            secondCard = flippedCardElement;


            if (firstCard.innerHTML === secondCard.innerHTML) {

                wins = wins + 2;

                firstCard = undefined;
                secondCard = undefined;


                if (wins === numDeCartas) {
                    alert(`Você ganhou em ${plays} jogadas!`);
                }


                console.log('acertou!');
            } else {
                console.log('errou!');
                setTimeout(flipCard, 1000);

            }
        }
    }
    // se duas cartas forem iguais permanecer virada
    // só posso virar duas cartas
    //// marcar a primeira carta
    // marcar a segunda
    //comparação da cartas
    console.log(wins);
    flippedCardElement.classList.toggle("flip");

}


function perguntarQtdCartas() {
    numDeCartas = Number(prompt('Com quantas cartas deseja jogar?'));


    while (numDeCartas < 4 || numDeCartas > 14 || (numDeCartas % 2 !== 0)) {
        alert('Quantidade cartas inválida!');
        numDeCartas = Number(prompt('Com quantas cartas deseja jogar?'));


    }
}

function mostrarCartas() {

    const ul = document.querySelector(".box-cartas");

    for (let i = 0; i < baralho.length; i++) {
        ul.innerHTML += `
        <li class="card" onclick="clicarNaCarta(this,'${baralho[i]}')">
                <div class="front-face face">
                    <img src="./imagens/back.png">
                </div>

                <div class="back-face face">
                    <img src="./imagens/${baralho[i]}">
                </div>
            </li >
            `;
    }


}

function preencherBaralhoAleatoriamente() {
    for (let i = 0; i < (numDeCartas / 2); i++) {
        let carta = cartas[i];

        baralho.push(carta);
        baralho.push(carta);
    }
    baralho.sort(randomizar);
}




