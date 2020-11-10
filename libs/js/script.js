// Create map variable
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// Add a tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2l6aXQwIiwiYSI6ImNraDA1ZTFxYzFhZGwydXJyejRraHM5MDkifQ.XFPjZp0EvFSM0P69qnxgmg'
}).addTo(mymap);

// makes calls to get data from geojson file async
const getData = callback =>{
    $.ajax({
        method: 'GET', 
        url: "libs/php/readjson.php", 
        success: callback
    })
}

var geojson = {}
$('#btn1').on('click', ()=>{

    var result = getData(response => {
        var res = JSON.parse(response);
        if(Object.keys(geojson).length !== 0){
           
        }
        // console.log(res);

        res.features.forEach(feature => {
            if(feature.properties.name === $('#country').val()){
                geojson = {
                    "type": "Feature", 
                    "properties": {
                        "name": feature.properties.name,
                        "iso_a2":feature.properties.iso_a2,
                        "iso_a3":feature.properties.iso_a3,
                        "iso_n3": feature.properties.iso_n3
                    },
                    "geometry": {
                        "type": feature.geometry.type, 
                        "coordinates": feature.geometry.coordinates
                    }
                }
                console.log(geojson)
                const layer = L.geoJSON(geojson).addTo(mymap);
                console.log(layer);
                L.geoJSON(geojson).removeFrom(mymap);
            }
        });

    })
    
})



// var marker = L.marker([23.75975, -77.53466]).addTo(mymap);



// var circle = L.circle([23.75975, -77.53466], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);
// var polygon = L.polygon(coordsToLatLng([[[[-77.53466,23.75975],[-77.78,23.71],[-78.03405,24.28615],[-78.40848,24.57564],[-78.19087,25.2103],[-77.89,25.17],[-77.54,24.34],[-77.53466,23.75975]]],[[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]]],[[[-77,26.59],[-77.17255,25.87918],[-77.35641,26.00735],[-77.34,26.53],[-77.78802,26.92516],[-77.79,27.04],[-77,26.59]]]])).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);