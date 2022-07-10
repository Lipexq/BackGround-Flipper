let arrayName = ['purple', 'yellow', 'brown', 'orange'];
// let objects = [
//     {Color: 'purple', ID: '1'}
// ]


var count = 0;

function Switch() {

    if (count < arrayName.length) {
        document.getElementById('corpo').style.backgroundColor = arrayName[count];
        // (count>0) ? document.getElementById('').innerHTML = "id color =" = + (count-1) + '<br/>' + 'Cor atual: ' + arrayName[count] : count;
        document.getElementById('selection').innerHTML = "id color = " + (count + 1) + '<br/>' + 'Cor atual: ' + arrayName[count];
        count++;

    } else {
        count = 0;
    }
}

function addColor() {
    let Color = prompt("Digite uma cor em inglês");

    arrayName.unshift(Color);
    count = 0;

    if (Color == '') {
        alert("selecione uma cor valida!");
        count = 0;
    }

    return Switch();
}

function delet() {
    let delets = prompt("digite o nome da cor a ser deletada");

    if (delets.match(arrayName[delets])) {
        let deleti = parseInt(prompt("Digite o ID da cor a ser apagada"));
        arrayName.splice(deleti - 1, 1);
        count = 0;
        alert('cor apagada com sucesso!')
        return Switch();

    } else {
        alert("cor invalida vei");
        count = 0;
        return Switch();
    }
}

function shuffleArray() {
    arrayName.sort();
    alert("Cores em ordem alfabeticas com sucesso!");
    count = 0;
    return Switch();

    }