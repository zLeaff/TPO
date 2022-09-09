function iniciarMap(){
    var coord = {lat:-34.9142756 ,lng: -57.9342291};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 18,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}