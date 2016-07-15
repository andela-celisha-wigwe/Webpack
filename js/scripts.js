function vol( {length:l, width:w, height:h, callback:c} ) {
	var vol = l * w * h;

	if (c) {
		c(vol);
	}

	return vol;
}

console.log( vol({length:2, width:3, height:5, callback: function (vol){
	console.log("This is a callback for " + vol);
} }) );

var name = "bolt";
console.log(`I like ${name}`); // using backtick for templating


