function toCurrency(total, values) {
    total *= 100;
    for(
        var i=0,counts=[];
        counts[i]=total/values[i], total=total%values[i];
        i++
     );
     return counts.map(Math.floor);
}

toCurrency(32.47, [500, 100, 25, 10, 5, 1]); //[6, 2, 1, 2, 0, 2]
