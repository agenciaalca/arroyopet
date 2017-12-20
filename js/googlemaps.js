var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(-16.7182785,-49.3421067),
    mapTypeId: 'roadmap'
  });

  var iconBase = 'http://agenciaalca.com/projetos/arroyo/img/';
  var icons = {
    arroyo: {
      icon: iconBase + 'mapa.png'
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(-16.7182785,-49.3421067),
      type: 'arroyo'
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
}