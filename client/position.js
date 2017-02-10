// Recupération et calcul de position --------------------------------

function recuperationPosition(position) {

	function calculDistance(lat_a, lon_a, lat_b, lon_b){
		a = Math.PI / 180;
		lat1 = lat_a * a;
		lat2 = lat_b * a;
		lon1 = lon_a * a;
		lon2 = lon_b * a;

		t1 = Math.sin(lat1) * Math.sin(lat2);
		t2 = Math.cos(lat1) * Math.cos(lat2);
		t3 = Math.cos(lon1 - lon2);
		t4 = t2 * t3;
		t5 = t1 + t4;
		rad_dist = Math.atan(-t5/Math.sqrt(-t5 * t5 +1)) + 2 * Math.atan(1);
		return (rad_dist * 3437.74677 * 1.1508) * 1.6093470878864446;
	}

	var maposition = {
	    "latitude": '48.866669',
	    "longitude": '2.23333' 
	}


	var infopos = "Position déterminée :\n";
	infopos += "Latitude : "+position.coords.latitude +"\n";
	infopos += "Longitude: "+position.coords.longitude+"\n";
	infopos += "Altitude : "+position.coords.altitude +"\n";
	distance = calculDistance(position.coords.latitude,position.coords.longitude, maposition.latitude, maposition.longitude);
	document.getElementById("distance").innerHTML = Math.round(distance);

}

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(recuperationPosition); // Je lance la fonction de recherche
}



