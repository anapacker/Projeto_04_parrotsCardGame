let numDeCartas;

const cartas = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.git',
    'metalparrot.gif',
    'revetitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrots.gif'

];

const baralho = [];

function perguntarQtdCartas() {
    numDeCartas = Number(prompt('Com quantas cartas deseja jogar?'));


    while (numDeCartas < 4 || numDeCartas > 14 || (numDeCartas % 2 !== 0)) {
        alert('Quantidade cartas inválida!');
        numDeCartas = Number(prompt('Com quantas cartas deseja jogar?'));


    }
}




function mostrarCartas() {
    for (let i = 0; i < (numDeCartas / 2); i++) {
        let carta = cartas[i];

        baralho.push(carta);
        baralho.push(carta);
    }

    const ul = document.querySelector(".box-cartas");

    for (let i = 0; i < baralho.length; i++) {
        ul.innerHTML += `
        <li class="carta">
                <div class="front-card card">
                    <img src="./imagens/back.png">
                </div>

                <div class="back-card card">
                    <img src="./imagens/${baralho[i]}">
                </div>
            </li >
            `;
    }


}

perguntarQtdCartas()
mostrarCartas();

console.log(baralho);




