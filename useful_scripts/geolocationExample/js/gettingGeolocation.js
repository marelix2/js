var posH;
var posL;
var loc;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
        	posH = pos.coords.latitude;
        	posL = pos.coords.longitude;
        	loc = parseURL();
        	//console.log(posH +" "+ posL);
        });

    } else {
       console.log("Geolocation is not supported by this browser.");
    }
}



function parseURL(){
	return "https://maps.googleapis.com/maps/api/staticmap?center="
    +posH+","+posL+"&zoom=15&size=800x600&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
}

function checkIfDataAvaliable(){


	if(typeof posH === "number"){

				var imgMap = new Image();
				imgMap.src = loc;

			document.getElementById("container").appendChild(imgMap);
			clearTimeout(checkIfDataAvaliable);

	} else
	setTimeout(checkIfDataAvaliable,1000);

}
try{
	getLocation();
}catch(e)
{


}finally{

	checkIfDataAvaliable();

}

	
	

