//FIREFOX BROWSER ONLY...

var o = {
    push:[].push,
    length:0,
    toString:[].join,
    valueOf:function(){
        return arguments[0] == "number" ? this.length : this.toString();
    }
};

o.push(1, 2, 3);

o.toString(); // "1,2,3"
(o*1).toString(); // 3
