//Chrome, Safari, FF4, IE9
var keys = Object.keys(purchases), i=keys.length, totalCost = 0;

while  (i--) {
    totalCost += purchases[keys[i]];
}

totalCost; //12.45
