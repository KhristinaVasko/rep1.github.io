// function initMap() {
//     const mapContainer = document.querySelector('#map');
//     const map = new google.map.Map(mapContainer, {
//         zoom: 10,
//         center: {lat: 48.9294, lng: 24.7073}
//     });

    
// }

// google.maps.event.addDomListener(window, 'load', initMap);


// Initialize and add the map
function initMap() {
    var panorama = {lat: 48.9296, lng: 24.7072};
    var park = {lat: 48.9280, lng: 24.7100};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: park});
 
    var marker = new google.maps.Marker({position: panorama, map: map});
    var marker1 = new google.maps.Marker({position: park, map: map});
   
  }