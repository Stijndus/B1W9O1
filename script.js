//Alle variable en constante
const drinkPrijs = [1.50, 2.50, 3.00];

var drinkTotaal = [0, 0, 0]

var frisAantal = 0;
var bierAantal = 0;
var wijnAantal = 0;

var frisAantalPrompt = 0;
var bierAantalPrompt = 0;
var wijnAantalPrompt = 0;

var orderStatus = true;

//De code die wordt uitgevoerd
alert('Welkom bij Snackbar \nU gaat zo bestellen');
while (orderStatus == true) {
    order();
}

function order() {
    var orderStart = prompt('?').toLocaleLowerCase();
    if (orderStart == 'stop') {
        orderStatus = false;
        alert('u krijgt nu de rekening');
        document.write('Rekening <br>' + 'Blikjes fris ' + frisAantal + ' x €' + drinkPrijs[0] + ' = €' + drinkTotaal[0] + '<br>' + 'Flesjes bier ' + bierAantal + ' x €' + drinkPrijs[1] + ' = ' + drinkTotaal[1] + '<br>' + 'Flesjes wijn ' + wijnAantal + ' x €' + drinkPrijs[2] + ' = €' + drinkTotaal[2] + '<br>');
    } else if (orderStart == 'fris') {
        frisAantalPrompt = prompt('Hoeveel blikjes fris wilt u?');
        frisAantal = parseInt(frisAantalPrompt);
        drinkTotaal[0] = frisAantal * drinkPrijs[0];
        alert(drinkTotaal[0]);
    } else if (orderStart == 'bier') {
        bierAantalPrompt = prompt('Hoeveel flesjes bier wilt u?');
        bierAantal = parseInt(bierAantalPrompt);
        drinkTotaal[1] = bierAantal * drinkPrijs[1];
        alert(drinkTotaal[1]);
    } else if (orderStart == 'wijn') {
        wijnAantalPrompt = prompt('Hoeveel flesjes wijn wilt u?');
        wijnAantal = parseInt(bierAantalPrompt);
        drinkTotaal[2] = wijnAantal * drinkPrijs[2];
        alert(drinkTotaal[2]);
    }

}