//npm
var inquirer = require('inquirer');

//variables
var wordArr = ["mango", "peach", "orange", "melon", "pear", "grape"]
var guesses = [];
var remaining = 10;
var display = 0;
var current = null;

// display _
var Letter = function(let){
	this.letter = let;
	this.appear = false;

	this.letterRender = function() {

		if(this.letter === ' '){
			this.appear = true;
			return ' ';

		}
		else if(this.appear === false){
			return ' _ ';
		}
		else{
			return this.letter;
		}
	}
}

//

var Word = function(wor){

	this.word = wor;
	this.letters = [];
	this.wordFound = false;

	this.generate = function(){

		for(var i = 0; i < this.word.length; i++){
			var newLetter = new Letter(this.word[i]);
			this.letters.push(newLetter);
		}
	};

	this.checkCurrent = function(){
		if(this.letters.every(function(lett){
			return lett.appear === true;
		})){
			this.wordFound = true;
			return true;
		}

	};

	this.checkMatch = function(guesses){
		var whatToReturn = 0;

		this.letters.forEach(function(lett){
			if(lett.letter === guesses){
				lett.appear = true;
				whatToReturn++;
			}
		})
		return whatToReturn
	}

	this.wordRender = function(){
		var display = ' ';

		this.letters.forEach(function(lett){
			var current = lett.letterRender();
			//display+=currets
			display = current;
		})

		return display;
	}

}

var start = function(){

	if(guesses.length > 0){
		guesses = [];
	}
		inquirer.prompt([{
			name: "first",
			type: "confirm",
			message: "R E A D Y ?"
		}]). then(function(answer){
			if(answer.first){
				game();

			}
			else {
				console.log ("B Y E B Y E")
			}
		})
}


var game = function(){

	if(remaining === 10){

		console.log(" === WELCOME TO FRUIT HANGMAN ===")

		console.log("G A M E S T A R T");

		var random = Math.floor(Math.random()*wordArr.length);
		//this


		current = new Word(wordArr[random]);


		// var generate = function(){

		// 	for(var i = 0; i < word.length; i++) {

		// 		var newLetter = new Letter(this.word[i]);

		// 		this.letters.push(newLetter);
		// }

	// current.generate();
	current.generate( );
	console.log(current.wordRender());
	prompt();
	
	}

	else {
		resetRemaining();
		game();
	}

}

var resetRemaining = function(){
	remaining = 10;
}

var prompt = function(){
	inquirer.prompt([{
		name: "second",
		type: "input",
		message: "Choose a letter: ",
		validate: function(value){
          if (isNaN(value)) {
            return true}

          else{
            return false
          }
      }

	}]).then(function(let){

		var duplicated = false;		
		//this.guesses
		// how can i make it lower case

		var lower = toLowerCase(let.second);

		for(var i = 0; i < guesses.length; i++){
			if(lower === guesses[i]){
				duplicated = true;
				console.log("D U P L I C A T E D  G U E S S")
				prompt();
			}
		}

		if(duplicated === false){
			guesses.push(lower);

			var found = current.checkMatch(lower);

			if(found === 0){
				console.log("W R O N G")
				//
				remaining--;
				display++;
				console.log("Guesses remaining: " + remaining);
				console.log(current.wordRender());
				console.log("Letters guessed: " + guesses);
			}
			else{
				console.log("R I G H T");
				if(current.checkCurrent() === true){
					console.log("Y O U  W O N ! C O N G R A T S !")
				}

				else{
					console.log("Guesses remaining: " + remaining);
					console.log(current.wordRender());
					console.log("Letters guessed: " + guesses);
				}
			}

			if(remaining > 0 && current.wordFound === false){
				prompt();
			}
			else if(remaining === 0){
				console.log("G A M E O V E R");
				//
				console.log("Answer was: " + current.word)
			}

			else{

				
			}

		}

	})
}


//init
start();
