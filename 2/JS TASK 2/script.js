'use strict';
var expect = chai.expect; 
'use strict';
/*function sum(x,y) {
	return x+y;
}
*/
let sumResult = 0

/*function digits(myString) {
	var mySum = window.prompt()
	while (myString) {
    mySum += myString % 10;
    myString = Math.floor(myString / 10);
}

console.log(mySum);
}*/
'use strict';
/*describe('The sum() function', function() {
 it('Returns 4 for 2+2', function() {
   expect(sum(2,2)).to.equal(4);
 });
 it('Returns 0 for -2+2', function() {
   expect(sum(-2,2)).to.equal(0);
 });
});
*/
let val = window.prompt()
while(val != null){ 

	console.log(digits(val))
	console.log(letters(val))
	sum(val)
	 val = window.prompt()
}

function digits(string){
	var myResult = 0;
	
	for(let c of string){
		if(!isNaN(parseInt(c)))
			myResult+=parseInt(c)
	}
	return myResult;
	
}

describe('The digits() function', function() {
 it('Returns 4 for 2+2', function() {
   expect(digits('142')).to.equal(7);
 });
 
  it('Returns 4 for 2+2', function() {
   expect(digits('ambuc')).to.equal(0);
 });
 
  it('Returns 4 for 2+2', function() {
   expect(digits('kxy243')).to.equal(9);
 });
 
  it('Returns 4 for 2+2', function() {
   expect(digits('264bnm')).to.equal(12);
 });
 
  it('Returns 4 for 2+2', function() {
   expect(digits('')).to.equal(0);
 });
});

function letters(string){
	var myResult = 0;
	
	for(let c of string){
		if(isNaN(parseInt(c)))
			myResult++
	}
	return myResult;
}

describe('The letters() function', function() {
 it('Returns the number of letters', function() {
   expect(letters('142')).to.equal(0);
 });
 
  it('Returns the number of letters', function() {
   expect(letters('ambuc')).to.equal(5);
 });
 
  it('Returns the number of letters', function() {
   expect(letters('kxy243')).to.equal(3);
 });
 
  it('Returns the number of letters', function() {
   expect(letters('264bnm')).to.equal(3);
 });
 
  it('Returns the number of letters', function() {
   expect(letters('')).to.equal(0);
 });
});

function sum(string){/*sum the result*/
	var myResult = 0;
	var i = 0;
	
	while(!isNaN(parseInt(string.charAt(i)) && i<string.length)){
	myResult *= 10
	myResult += parseInt(string.charAt(i))
	i++
	}
	sumResult+=myResult
	
	
	console.log(sumResult)
	return sumResult
	
}
sumResult = 0
describe('The sum() function', function() {
 it('Returns the number of letters', function() {
   expect(sum('142')).to.equal(142);
 });
 
  it('Returns the sum of all readed numbers', function() {
   expect(sum('ambuc')).to.equal(142);
 });
 
  it('Returns the sum of all readed numbers', function() {
   expect(sum('kxy243')).to.equal(142);
 });
 
  it('Returns the sum of all readed numbers', function() {
   expect(sum('264bnm')).to.equal(406);
 });
 
  it('Returns the sum of all readed numbers', function() {
   expect(sum('')).to.equal(406);
 });
});