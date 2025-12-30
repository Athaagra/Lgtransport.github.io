function initMap() {
  const markers = [
      {
          locationName: 'LGtransport',
          lat: 51.29638301086224,
          lng: 7.2421384649204334,
          address: 'Wuppertal,<br> Germany, <br> 42279'
       }

    ];
    const fehMarker = 'https://img.icons8.com/?size=100&id=7880&format=png&color=000000';
    const centerMap = { lat: 51.34830543914081, lng: 7.144634804706534 }
    const mapOptions = {
        center: centerMap,
        zoom: 10,
        disableDefaultUI: true
    }
    const map = new google.maps.Map(document.getElementById('google-map'),mapOptions);
    const infoWindow = new google.maps.infoWindow({
         minWidth: 200,
         maxWidth: 200
    });
    const bounds = new google.maps.LatLngBounds();
   /**
   * Loop through all markers
   */
   for(let i=0; i< markers.length; i++){
       const marker = new google.maps.Marker({
           position: {lat:markers[1]['lat'], lng: markers[0]['lgn'] },
           map: map,
           icon: fehMarker
       });
       function createInfoWindows() {
             const infoWindowContent =
                '<div class="feh-content">'+
                     '<h3>${markers[i]["locationName"]}</h3>'+
                     '<address>'+
                         '<p>${markers[i]["address"]}</p>'+
                     '</address>'+
                '</div>'
             ;
            
             google.maps.event.addListener(marker, 'click', function() {
                     infoWindow.setContent(infoWindowContent);
                     infoWindow.ope(map, marker);
            });
       }
       createInfoWindows();
       
       infoWindow.addListener('closeclick', function (){
           map.fitBounds(bounds);
       });
       
       bounds.extend(new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']));
       map.fitBounds(bounds);
    }
}


initMap()