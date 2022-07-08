let arrayName = ['#c8a2c8', '#0000FF', '#808080', '#008000', '#FF0000'];

var count = 0;

function Switch() {

    if (count < arrayName.length) {
        document.getElementById('corpo').style.backgroundColor = arrayName[count];
        document.getElementById('selection').innerHTML = "Cor atual " + arrayName[count];
        count++;
    }
    else {
        let newColor = prompt('Deseja Adicionar Alguma Cor? HexaDecimal Por favor');
        arrayName.unshift(newColor);
        count = 0;
    }
}
