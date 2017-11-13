(function() {
	var tooltip = null;

	function assignEvent(e, type, event){

	for(var i=0; i< e.length; i++)
		e[i].addEventListener(type, event, false);

	}

	
	function showTooltip(e){

		var option = {
			x: e.target.offsetLeft,
			y: e.target.offsetTop,
			w: e.target.offsetWidth
		}

		var text = e.target.getAttribute("title");

		createTooltip(text, option);
		e.target.removeAttribute("title");
	}

	function removeTooltip(e){
		e.target.setAttribute("title", tooltip.textContent);
		tooltip.parentNode.removeChild(tooltip);
	}

	function createTooltip(text, option){

		 tooltip = document.createElement("div");
		 tooltip.className = "tooltip";

		tooltip.appendChild(document.createTextNode(text));
		document.body.appendChild(tooltip);

		tooltip.style.top = (option.y - tooltip.offsetHeight - 10) + "px";
		tooltip.style.left = (option.x + option.w/2) - tooltip.offsetWidth /2 + "px";


	}


	

	function init(e){

		assignEvent(e, "mouseenter", showTooltip);
		assignEvent(e, "mouseleave", removeTooltip);

	}


window.tooltip = init;


})();