/*var cows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

Array.prototype.countType = function(animal) {
	var counter = 0;

	for(var i = 0; i < this.length; i++) {
		
		for(var key in this[i]){
			if (this[i][key] == animal) {
				counter++
			}
		
		}
	}

	return animal + ' : ' +counter;
};

console.log(cows.countType('cow'));*/