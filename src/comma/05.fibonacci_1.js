var r = [], n = 0, a = 0, b = 1, next;

function nextFibonacci() {
    next = a + b;
    return b = (a = b, next);
}

while(n++ < 10) {
    r.push(nextFibonacci());
}

r; //[1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
