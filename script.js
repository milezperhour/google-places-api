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
}

google.maps.event.addDomListener(window, 'load', initialize);