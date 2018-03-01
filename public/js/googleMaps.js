function initMap() {
	// add your code here
	var ucsd_ltlng = {lat:32.8788033, lng: -117.2359121};

	var map = new google.maps.Map(document.getElementById('map'),{
		center: ucsd_ltlng,
		zoom: 18
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title:"UCSD"
	});
}

