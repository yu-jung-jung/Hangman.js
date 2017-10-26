var Letter = function(ltr) {

	this.character = ltr;

	this.appear = false;

	this.ltrRender = function(){

		if (this.appear = true) {
			return this.character;
		}
		else {

			return "_";
		}
	}

};

module.exports = Letter;