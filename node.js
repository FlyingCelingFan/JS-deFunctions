var fahrenhait = 50;
var celcius = 10;

//converting far to cel

function fahr2Con(f) {
	return (f - 32) * 5/9

}

console.log(fahr2Con(10));




function con2Fahr(c) {
	return c * (9/5)  + 32
}

console.log(con2Fahr(50));


//var c = prompt("input fahrenhait , test"); // prompts user for input. Only works on browsers 