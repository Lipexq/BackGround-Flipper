let arrayName = ['#c8a2c8', '#0000FF', '#808080', '#008000', '#FF0000'];

var count = 0;

function Switch() {

    if (count < arrayName.length) {
        document.getElementById('corpo').style.backgroundColor = arrayName[count];
        document.getElementById('selection').innerHTML = "id color = " + (count + 1 );
        count++;

    } else {
        count = 0;
    }
}

function addColor() {
    let Color = prompt("Digite uma cor em Hexadecimal");
    arrayName.unshift(Color);
    count = 0;

    if (Color == "") {
        alert("selecione uma cor valida!");
    }
}

function delet() {
    let delets = prompt("Digite o ID da cor a ser apagada");
    arrayName.splice(delets - 1, 1);
    count = 0;
    if(delets == ''){
        alert("digite um ID por favor");
    }
}

// function random() {
//     var randomizar = arrayName[Math.floor(Math.random() * arrayName.length)];
// }
