let arrayName = ['#c8a2c8', '#0000FF', '#808080', '#008000', '#FF0000'];

var count = 1;

function Switch() {

    if (count < arrayName.length) {
        document.getElementById('corpo').style.backgroundColor = arrayName[count];
        document.getElementById('selection').innerHTML = "ID da cor = " + count + '<br/>' + "Cor atual " + arrayName[count];
        count++;

    } else {
        count = 1;
        let newColor = prompt("Deseja adicionar alguma cor? yes or not");

        if (newColor == 'yes') {
            let Color = prompt("Digite a cor em Hexadecimal por favor");
            arrayName.unshift(Color);
            count = 0;

        } else {
            let question = prompt("Deseja Apagar alguma cor? yes or not");

            if (question == 'yes') {
               var delets = prompt("Digite o ID da cor a ser apagada");
                arrayName.splice(delets-1, 1);
            } else {
                alert("blz bb então nao apaga nada (y) chatao hein");
            }
        }
    }
}


// function random() {
//     var randomizar = arrayName[Math.floor(Math.random() * arrayName.length)];
// }
