const mark, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  mark.push(
    new google.maps.Mark({
      position: {
        lat: -36.8404,
        lng: 174.74,
      },
      map,
      title: "Auckland",
    })
  );
  
  mark.push(
    new google.maps.Mark({
      position: {
        lat: 51.05011,
        lng: -114.08529,
      },
      map,
      title: "Calgary",
    })
  );
  
  mark.push(
    new google.maps.Mark({
      position: {
        lat: 43.70011,
        lng: -79.4163,
      },
      map,
      title: "Toronto",
    })
  );
}
