var colorIndex = 0,
    colors = ["FF0000", "008000", "FF0086", "A2FF00", "0000FF", "800080"];

function selectNextColor(){
    return colors[colorIndex++] || colors[colorIndex = 0, colorIndex++];
}
