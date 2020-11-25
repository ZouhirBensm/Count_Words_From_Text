// Is able to count the most frequency of a word in a text



//Some imports commands if you want to import the string of text you want to count the words of

var fs = require("fs");
var importText = fs.readFileSync("USE YOUR OWN DIRECTORY/C00.txt").toString('utf-8');

//console.log(typeof importText, importText);

//end of import

//Local Strings work too
const someText = 
	"Hello this is a text to parse and use a hash to find the most occurence of words to operate I count using this function that will enable me to count the occurence of each word every time it repeats itself. The data structure will probably be a object with each word being a property and every time a new word is found it will create the property. If the word already exists I will just iterate it's count giving it's number thus far in the looping program.";
	
const someText2 = 
	"Hello thanks Hello thanks Hello bye Hello.";
//

function getFrequency(someText){
var freq ={};
let mots = someText.split(" ");

mots = mots.filter(w => /[^.,]$/.test(w));

	for (var i=0 ; i<mots.length ; i++){
		var mot = mots[i];
		
		if(freq[mot]){
			freq[mot]++;
		} else {
			freq[mot] = 1;
		}
	}
	return freq;
}

//PUT WHATEVER STRING OF TEXT YOU WANT TO COUNT THE WORDS OF IN THIS FUNCTION
console.log(getFrequency(someText));
console.log(getFrequency(someText2));
console.log(getFrequency(importText));
