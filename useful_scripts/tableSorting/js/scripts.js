
(function() {

var table = document.querySelector("#myTable"),
    ths = table.querySelectorAll("thead th"),
    trs = table.querySelectorAll("tbody tr");

    function createTable(ArrayLike){

    	var tab = [];

    	for( var i = 0; i < ArrayLike.length; i++) tab.push(ArrayLike[i]);

    	return tab;
    }

    function clearClassName(nodes){

    	for(var i =0; i < nodes.length; i++) nodes[i].className = "";

    }

    function sortBy(e){

    	var target = e.target,
    		arrThs = createTable(ths),
    		arrTrs = createTable(trs),
    		fragmentD = document.createDocumentFragment(),
    		order = (target.className === "" || target.className ==="desc")? "asc" : "desc";

    		clearClassName(arrThs);
    		arrTrs.sort(function (a, b){

    			var direction = (order === "asc") ? 1 : -1;
    			var	trA = a.children[arrThs.indexOf(target)].textContent,
    				trB = b.children[arrThs.indexOf(target)].textContent;

    			if(trA < trB) return -1 * direction;
    			if(trA > trB) return 1 * direction;
    			return 0;



    		});

    		arrTrs.forEach(function(element){

    			fragmentD.appendChild(element);

    		});

    		target.className = order;

    		table.querySelector("tbody").appendChild(fragmentD);

    }

   for(var i = 0; i< ths.length ; i++) ths[i].onclick = sortBy;

})();