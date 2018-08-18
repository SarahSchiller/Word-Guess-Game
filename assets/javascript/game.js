
let dictionary = 
[
	"beets", 
	"collar blind", 
	"dinkin\'\ flicka", 
	"dundies","new guy", 
	"bandit", 
	"merger", 
	"paper", 
	"bobblehead", 
	"escape goat", 
	"fleece it out", 
	"all inclusive"
];

let score=10;
let secretArr = [];
let wrongLetter =[];
let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/*
let word = dictionary[Math.floor(Math.random() * dictionary.length)];

console.log(word);
//document.getElementID("word-choice").innerHTML = word; 
document.getElementById("word-choice").innerHTML = word;
*/

function getWord()
{
	//creates secret word from wordbank
	let word = dictionary[Math.floor(Math.random() * dictionary.length)];
	//display via html
	// document.getElementByID("word-choice").innerHTML = word;
	//returns the secret word
	return word;

}
function getUserArray(myWord)
{
	for(let i = 0; i < myWord.length; i++)
	{
		if(myWord[i] != " ")
		{
			//console.log("check if goes into forloop")
		secretArr[i]="_ ";
		}
		else
		{
			secretArr[i] =" ";
		}
		
	}
	//console.log("resetting secret to blanks: "+secretArr);
	return secretArr.join("");
}

//1. create a wordbank 
let myWord= getWord();
console.log(myWord)

//2. select a secret word from the word bank
let blankArr= getUserArray(myWord);
console.log(blankArr);


//3. once secret word is selected go ahead and display blanks
//(create an array that starts with blanks, to store the user's guess secretArr array)
document.getElementById("word-choice").innerHTML = blankArr;

//4. on key event which waits for the user's input
document.onkeyup = function(event) {

    // Determines which key was pressed.
    
    let letter = event.key;
    

    let html = 
        blankArr + "<p>" + letter + "</p>";
    document.querySelector("#word-choice").innerHTML = html
};

	//A. we need to check if the round is over 
	//if you still have points or the secret word is not displayed
	//if (score >=0 || secretArr != word)
			//check to see if the user input matches the secret word (run a for loop to check it)
			//if there is a match
				//fill in the correct letter in the right spot
			//else (what happens if it is not correct)
				//person loses a point (score--)
				//incorrect letter needs to be stored to show user letters used (wrongLetter array)
	//else we need to start over the round 
		//A: if score is zero (if(score ==0)) (if we run out of turns reset the score to 10)
			//we need to restart the game and set score back to 10
			//we have to grab another word
			//we need to reset the secretArr
			//we need to reset the wrongLetterArr
		//B: else we get a new word and continue the next round (if we guessed correcty and have more turns)
			//we have to grab another word
			//we need to reset the secretArr
			//we need to reset the wrongLetterArr
