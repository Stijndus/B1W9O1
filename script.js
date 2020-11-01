//Alle variable en constante
const drinkPrijs = [1.50, 2.50, 3.00];

var drinkTotaal = [0, 0, 0]

var frisAantal = 0;
var bierAantal = 0;
var wijnAantal = 0;

var frisAantalPrompt = 0;
var bierAantalPrompt = 0;
var wijnAantalPrompt = 0;

//Bitterbal variable en Constante
const bitterbalPrijs = [4.50, 9.00];

var bitterbalTotaal = [0, 0];

var bitterbal8Prompt = 0;
var bitterbal16Prompt = 0;

var bitterbal8 = 0;
var bitterbal16 = 0;

var orderStatus = true;

//De code die wordt uitgevoerd
alert('Welkom bij Snackbar \nU gaat zo bestellen');
while (orderStatus === true) {
    order();
}

//Drankjes bestelling functie
function order() {
    var orderStart = prompt('Wat wilt u bestellen, u kunt kiezen uit: \nFris, Bier, Wijn, Snack \nAls u de rekening wilt: \nRekening').toLocaleLowerCase();
    if (orderStart === 'rekening') {
        orderStatus = false;
        alert('U krijgt nu de rekening');
        document.write('Rekening drankjes <br>' + 'Blikjes fris = ' + frisAantal + ' x €' + drinkPrijs[0] + ' = €' + drinkTotaal[0] + '<br>' + 'Flesjes bier = ' + bierAantal + ' x €' + drinkPrijs[1] + ' = ' + drinkTotaal[1] + '<br>' + 'Flesjes wijn = ' + wijnAantal + ' x €' + drinkPrijs[2] + ' = €' + drinkTotaal[2] + '<br>');
        document.write('<br> Rekening snacks <br>' + 'Schaal van 8 = ' + bitterbal8 + ' x €' + bitterbalPrijs[0] + ' = €' + bitterbalTotaal[0] + '<br>' + 'Schaal van 16 = ' + bitterbal16 + ' x € ' + bitterbalPrijs[1] + ' =€' + bitterbalTotaal[1]);
    } else if (orderStart === 'fris') {
        frisAantalPrompt = prompt('Hoeveel blikjes fris wilt u?');
        frisAantal = parseInt(frisAantalPrompt);
        drinkTotaal[0] = frisAantal * drinkPrijs[0];
        alert('U heeft ' + frisAantal + ' blikjes fris bestelt');
    } else if (orderStart === 'bier') {
        bierAantalPrompt = prompt('Hoeveel flesjes bier wilt u?');
        bierAantal = parseInt(bierAantalPrompt);
        drinkTotaal[1] = bierAantal * drinkPrijs[1];
        alert('U heeft ' + bierAantal + ' flesjes bier bestelt');
    } else if (orderStart === 'wijn') {
        wijnAantalPrompt = prompt('Hoeveel flesjes wijn wilt u?');
        wijnAantal = parseInt(bierAantalPrompt);
        drinkTotaal[2] = wijnAantal * drinkPrijs[2];
        alert('U heeft ' + wijnAantal + ' flesjes wijn bestelt');
    } else if (orderStart === 'snack') {
        var snackStart = prompt('Hoe grote schaal bitterballen wilt u hebben?\n8 of 16');
        if (snackStart == 8) {
            bitterbal8Prompt = prompt('Hoeveel schalen van 8 bitterballen wilt u hebben');
            bitterbal8 = parseInt(bitterbal8Prompt);
            bitterbalTotaal[0] = bitterbal8 * bitterbalPrijs[0];
            alert('U heeft ' + bitterbal8 + ' schalen van 8 bitterballen bestelt')
        } else if (snackStart == 16) {
            bitterbal16Prompt = prompt('Hoeveel schalen van 16 bitterballen wilt u hebben');
            bitterbal16 = parseInt(bitterbal16Prompt);
            bitterbalTotaal[1] = bitterbal16 * bitterbalPrijs[1];
            alert('U heeft ' + bitterbal16 + ' schalen van 16 bitterballen bestelt')
        } else {
            alert('U moet 8 of 16 invullen');
        }
    }
}