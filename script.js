let numDeCartas;

const imagens = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.git',
    'metalparrot.gif',
    'revetitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrots.gif'

];

function perguntarQtdCartas() {
    numDeCartas = Number(prompt('Com quantas cartas deseja jogar?'));


    while (numDeCartas < 4 || numDeCartas > 14 || (numDeCartas % 2 !== 0)) {
        alert('Quantidade cartas inválida!');
        numDeCartas = Number(prompt('Com quantas cartas deseja jogar?'));


    }
}
perguntarQtdCartas()


function mostrarCartas{


}

    // const numDeCartas = [1]


    ///precisa ser um numero
    //precisa ser par
    //precisa repetir até ser um numero válio





