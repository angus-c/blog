var str = "hello!", spreadOut = "";

for (var index in str) {
    (index > 0) && (spreadOut += " ")
    spreadOut += str[index];
}

spreadOut; //"h e l l o !"
