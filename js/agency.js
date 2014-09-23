/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
	target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});

function initialize() {
	var contentString = '<div><h6>Class One Engineering Institute</h6><p>Akshay Centre, ' +
                                'Near Mc donalds, <br/>' +
                                'Aundh Road, Dange Chowk, <br/>' +
                                'Thergaon,' +
                                'Pune 411033' +
                                '<br/>' +
                                '<p><b>Contact number:</b>' +
                                '+91 8983106590 / +91 8956547026</div>';
	var mapCanvas = document.getElementById('map_canvas');
	var myLatlng = new google.maps.LatLng(18.609045, 73.770049);
	var mapOptions = {
		center: myLatlng,
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
	    position: myLatlng,
	    title:"Class One Engineering Institute"
	});

 	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
 	});

	// To add the marker to the map, call setMap();
	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
