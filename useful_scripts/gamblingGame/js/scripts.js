(function(){
var btn = document.querySelector("#getNumbers"),
	output = document.querySelector("#showNumbers");

	function getRandom(min,max){
		return Math.round(Math.random()*(max - min) + min);
	}

	function showRandoms(){

		var tmp = "",
			out = "";


		for(var i = 0; i < 8;i++){
			var isCorr = true;
			while(isCorr){
				
				tmp = getRandom(1,49);
				//console.log(tmp);
				if(!out.match(tmp+",")) isCorr = false;
			}
			
			out += tmp + ", ";

			
		}
		//console.log(out);
		output.value = out.substr(0, out.length-2);
	}

	btn.onclick = showRandoms;
	

})();