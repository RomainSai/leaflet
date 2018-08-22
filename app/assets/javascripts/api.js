$(document).ready(function(){
  // initialize the map
  var map = L.map('map').setView([51.505, -0.09], 13);


  // load a tile layer
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoicm9tYWlucmVubmVzIiwiYSI6ImNqbDU1bm9tNjBycnUzcHE4dHUxcnpkcjYifQ.7-ISGS5e-Y35otSssY6Nmw'
  }).addTo(map);
  var marker = L.marker([51.5, -0.09]).addTo(map);

 map.on('click',
 	function(e){
 		var coord = e.latlng.toString().split(',');
 		var lat = coord[0].split('(');
 		var lng = coord[1].split(')');
 		alert("You clicked the map at LAT: " + lat[1] + " and LONG: " + lng[0]);
 		L.marker(e.latlng).addTo(map);
 	});

  $(function() {

    var $longitude, $latitude, $message;
    $longitude = $('#longitude');
    $latitude = $('#latitude');
    $message = $('#message');
    $submit = $('#submit');
    $form = $('#form');

    $form.submit(function(){
      $longitude = $("#longitude").val();

      console.log($longitude);

      $latitude = $("#latitude").val();
      console.log($latitude);

      $message = $("#message").val();
      console.log($message);

      $submit = $("#submit").val();
      console.log($submit);

      alert('je suis dans le submit');

      var newmap = L.map('map').setView([40.505, -0.09], 13);

    });

  });

});
