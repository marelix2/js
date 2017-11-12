(function() {


	function createButton(){

		var button = document.createElement("button");

		button.classList.add("backToTop","hidden");
		button.textContent = "do gory";

		document.body.appendChild(button);

		return button;
	}

	var button = createButton();

	function scrBy(){
	if(	document.documentElement.scrollTop > 0){

		document.documentElement.scrollBy(0, -10);
		setTimeout(scrBy, 5);
	}
	

	}


	button.addEventListener("click",function(e){

		e.stopPropagation();
	
		scrBy();


	}, false);

	window.addEventListener("scroll",function(e){


			if(window.pageYOffset || document.documentElement.scrollTop  >= 100){

				button.classList.remove("hidden");

			}
			else{

				button.classList.add("hidden");

			}



	} ,false);

})();