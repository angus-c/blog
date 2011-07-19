var a = {};

//attempt eval in context of object <code>a</code>
(function() {
    eval("this.alert('If you can read this I must be global!')");
}).call(a);
//TypeError: this.alert is not a function

//force eval in global context
(function() {
    (0,eval)("this.alert('If you can read this I must be global!')");
}).call(a);
//alerts: 'If you can read this I must be global!'
