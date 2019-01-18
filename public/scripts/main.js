function initMap() {

  var geocoder =  new google.maps.Geocoder();
  geocoder.geocode( { 'address': loc}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
   // The location of Uluru
  var uluru = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map}); 
        } else {
          //console.log(geocoder.geocode( { 'address': loc}));
          alert("Something got wrong " + status);
        }
      });

}