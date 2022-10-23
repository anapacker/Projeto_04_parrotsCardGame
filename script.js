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


console.log(baralho);


//declarações de funções

function randomizar() {
    return Math.random() - 0.5;

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

function clicarNaCarta(cartaClicada, nomeCarta) {
    cartaClicada.classList.toggle("card-clicado");
    console.log(nomeCarta);

}

function preencherBaralhoAleatoriamente() {
    for (let i = 0; i < (numDeCartas / 2); i++) {
        let carta = cartas[i];

        baralho.push(carta);
        baralho.push(carta);
    }
    baralho.sort(randomizar);
}
