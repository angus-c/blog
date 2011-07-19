//Chrome, Safari, FF4, IE9
var keys = Object.keys(purchases), totalCost = 0;

for (var i=keys.length; i--;) {
    totalCost += purchases[keys[i]];
}

totalCost; //12.45
