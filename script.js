var map;

function initialize(){
    var center = new google.maps.LatLng(37.422, -122.084058);
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13
    });

    var request = {
        location: center,
        radius: 8047,
        types: ['cafe']
    };

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesService.OK){
        for (var i = 0; i < results.length; i++){
            createMarker(results[i]);
        }
    }
}

google.maps.event.addDomListener(window, 'load', initialize);