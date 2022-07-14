var count = 0;
var countback = 0;

var arrayColor = [
    {
        ID: 1,
        Color: 'Purple'
    },

    {
        ID: 2,
        Color: 'yellow'
    },

    {
        ID: 3,
        Color: 'Brown'
    },

    {
        ID: 4,
        Color: 'orange'
    }
]

//Função de passar as cores
function go() {
    if (count <= arrayColor.length) {
        document.getElementById('corpo').style.backgroundColor = arrayColor[count]['Color'];
        document.getElementById('selection').innerHTML = 'Cor: ' + arrayColor[count]['Color'];
        count++
        countback++
        if (count >= arrayColor.length) {
            count = 0;
            countback = 0;
        }
    }
}

function back() {
    if (countback < 1000) {
        if (countback == 0) {
            countback = arrayColor.length
        }
        document.getElementById('corpo').style.backgroundColor = arrayColor[countback - 1]['Color'];
        document.getElementById('selection').innerHTML = 'Cor: ' + arrayColor[countback - 1]['Color'];
        countback--
    }
}

//adicionar cores
function addColor() {
    let receive = prompt("Digite uma COR");

    if (receive != '') {
             arrayColor.push({ ID: arrayColor.length + 1, Color: receive })
            count = arrayColor.length - 1;
            alert('Cor adicionada com sucesso!')
    } else {
        alert('digite uma cor valida');
    }
}

function remove() {
    var delet = prompt("Deletar cor digite o nome");
    if (delet != '') {
        for (let i = 0; i < arrayColor.length; i++) {

            if (arrayColor[i]['Color'] == delet) {
                arrayColor.splice(i, 1);
                count = 0
                alert('Cor Apagada com sucesso!')

            }
        }
    } else {
        alert('Digita uma cor valida ae bixo')
    }
}

// Randomizar array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    alert("Array randomizado com sucesso")
    count = 0;
}

//Mostrar o array atual
function displays(){
    document.getElementById('selection').innerHTML = '';
    for(let j = 0; j < arrayColor.length; j++){
        document.getElementById('selection').innerHTML += '[ ' + arrayColor[j]['Color'] + ' ]';
    }
};
