function getRandomPrime() {
    while(n = Math.round(Math.random()*1000000000), !isPrime(n));
    return n;
}

var isPrime = function(n) {
    d = Math.ceil(Math.sqrt(n));
    while(n%(d--) && d);
    return !d;
}

getRandomPrime(); //425593109
getRandomPrime(); //268274719
