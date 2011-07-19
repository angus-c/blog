function echoArgs(a,b) {
	return arguments;
}

//number of formal parameters...
echoArgs.length; //2

//length of argument object..
echoArgs().length; //0
echoArgs(5,7,8).length; //3
