(function() {

var form = document.querySelector("#myForm"),
    fields = form.querySelectorAll("[data-error]");

    	function isEmpty(field){
    		return field.value !== "";
    	}

    	function minLeng(field, leng){
    		return field.value.length >= leng;
    	}

    	function validMail(field){

    		return field.value.match("^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+.[a-zA-Z]{2,3}$");
    	}

    	function showErrors(errors){

    		var ul = document.querySelector("ul.errors");

    		if(!ul){

    			ul = document.createElement("ul");

    			ul.classList.add("errors");


    		}

    		ul.innerHTML = "";

    		errors.forEach(function(error){
    			var li = document.createElement("li");
    			li.textContent = error;

    			ul.appendChild(li);

    		});

    		form.parentNode.insertBefore(ul, form);

    	}

    form.addEventListener("submit",function(e){

		errors = [];
    	e.preventDefault();

    	for (var i =0 ; i< fields.length; i++) {

    		var validString = true;

    		if(fields[i].type === "text"){

    			validString = isEmpty(fields[i]);
    		}

    		if(fields[i].type === "email"){

    			validString = validMail(fields[i]);
   
    		}

    		if(fields[i].type === "select-one"){
    			validString = isEmpty(fields[i]);
    		}

    		if(fields[i].type === "textarea"){

    		    validString = minLeng(fields[i], 5);
    			
    		}

    		if(!validString) {

    				fields[i].classList.add("error");

    			errors.push(fields[i].getAttribute("data-error"));
			}
			else 
			{
				fields[i].classList.remove("error");
			}

    	}

    		if(errors.length > 0){

    			showErrors(errors);
    		}else {
    			form.submit();
    		}



    	console.log(errors);

    }, false);


})();