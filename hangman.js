//node modules
var inquirer = require('inquirer');
var prompt = require('prompt');
//import modules
var Word = require('./word.js');

game ={
	wordArr: ["apple", "peach", "grape", "banana", "orange", "cherry", "pineapple", "mango"],
	remaining: 10,
	current: null,

	start: function (wrd) {

		this.resetRemaining();

		this.current = new Word(this.wordArr[Math.floor(Math.random()* this.wordArr.length)]);

		this.current.getLtr();

		this.userLog();

	},

	resetRemaining: function() {
		this.remaining = 10;
	},

	userLog : function(){

		var that = this;


		prompt.get(['guessltr'], function(err,result){

			console.log('The letter you guessed is '+result.guessltr);

			var countGuess = that.current.checkLtr(result.guessltr);

			if(countGuess === 0){

				console.log('Wrong');
				that.remaining--;
			}
			else{

				console.log('Right')

				if(that.current.findLtr()){

					console.log('YOU WON!')
					
					return;
				}
			}

			console.log('Remining Guesses: ', that.remaining);
			console.log(that.current.wrdRender());
			// console.log('Letter you guessed: ');

			// if((that.remaining > 0)&&(that.current.found = false)){
			// 	that.userLog();
			// }
			// else if (that.remaining === 0){
			// 	console.log("Answer was " ,that.current.word);
			// 	console.log("GAME OVER ...");
			// }
			// else{
			// 	console.log(that.current.wrdRender());
			// }

		})

	}
};

game.start();