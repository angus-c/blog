function toCurrency(total, values, sym) {
    total *= 100;
    //do the calc
    for(
        var i=0,counts=[];
        counts[i]=total/values[i], total=total%values[i];
        i++
    );
   //format
   var results = counts.map(function(s,i) {
       return s>=1 && [Math.floor(s),"x",(sym || '$') +
            (values[i]/100).toFixed(2)].join(' ');
    });
    return results.filter(Boolean).join(', ');
}

toCurrency(19.77, [500,100,25,10,5,1]);
//"3 x $5.00, 4 x $1.00, 3 x $0.25, 2 x $0.01"
toCurrency(19.77, [500,100,50,20,10,5,1], '£');
//"3 x £5.00, 4 x £1.00, 1 x £0.50, 1 x £0.20, 1 x £0.05, 2 x £0.01"
toCurrency(19.77, [500,100,50,20,10,5,2,1], '€');
//"3 x €5.00, 4 x €1.00, 1 x €0.50, 1 x €0.20, 1 x €0.05, 1 x €0.02"
