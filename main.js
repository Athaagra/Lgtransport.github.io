async function initMap() {
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
        disableDefaultUI: true,
        mapId: "4504f8b37365c3d0"
    }
    const { Map } = (await google.maps.importLibrary('maps'));
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new google.maps.Map(document.getElementById('google-map'),mapOptions);
    const infoWindow = new google.maps.InfoWindow({
         minWidth: 200,
         maxWidth: 200
    });
   //const bounds = new google.maps.LatLngBounds();
   /**
   * Loop through all markers
   */
   const contentString =
    '<div id="content">' +
    '<p id="firstHeading">LGtransport</p>' +
    '<div id="bodyContent">' +
    "<p>Wuppertal,<br> Germany, <br> 42279</p>" +
    "</div>" +
    "</div>";
   const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
   });
   for(let i=0; i< markers.length; i++){
       const marker = new AdvancedMarkerElement({
           position: {lat: markers[0]['lat'], lng: markers[0]['lng'] },
           map: map,
           title: "LGtransport",
    });
   console.log('This is marker',marker.position.uD);

   marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    })
})
}
}


initMap()