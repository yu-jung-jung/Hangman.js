var Letter = require('./letter.js');

var Word = function(wrd){

	this.word = wrd;
	this.ltr = [];
	this.found = false;

	this.getLtr = function(){

		for(var i = 0; i < wrd.length; i++){

			(this.ltr).push(new Letter(this.word.charAt(i)));
		}
	};

	this.findLtr = function() {

		var counter = 0;

		for(var i = 0; i<this.ltr.length; i++){

			if(this.ltr[i].appear = true){

				counter++;
			}

		}

		if(counter === this.ltr.length){
			this.found = true;
		}
		else{
			this.found = false;
		}

		return this.found;
	};

	this.checkLtr = function(userGuessLtr){

		returnVal = 0;

		for(var i = 0; i <this.ltr.length; i++){
			if(userGuessLtr === this.ltr[i].character){

				returnVal++;

				this.ltr[i].appear = true;
			}
		}

		return returnVal;
	};

	this.wrdRender = function() {

		var render = " ";

		for(var i = 0; i<this.ltr.length; i++){

			render += (this.ltr[i].ltrRender());
		}
		return render;
	};

}

module.exports = Word;